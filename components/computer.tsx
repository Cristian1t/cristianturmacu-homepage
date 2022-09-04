import { Box, Spinner, Text } from '@chakra-ui/react'
import { useCallback, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrthographicCamera, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../libs/model'

function easeOutCirc(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const Computer = () => {
  const refContainer = useRef(null)
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState<WebGLRenderer>()
  const [_camera, setCamera] = useState<OrthographicCamera>()
  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0))
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI) - 40,
      0,
      20 * Math.cos(0.2 * Math.PI)
    )
  )

  const [scene] = useState(new THREE.Scene())
  const [_controls, setControls] = useState<OrbitControls>()

  const handleWindowResize = useCallback(() => {
    // @ts-ignore
    const { current: container }: Element = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [renderer])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    // @ts-ignore
    const { current: container }: Element = refContainer
    if (container && !renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      setRenderer(renderer)

      // 640 -> 240
      // 8 -> 6
      const scale = scH * 0.2 + 4.8
      // const scale = 12
      console.log(scale)
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        -1000,
        1000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)
      setCamera(camera)

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
      scene.add(ambientLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target
      setControls(controls)

      loadGLTFModel(scene, '/computer.glb', {
        receiveShadow: false,
        castShadow: true
      }).then(() => {
        animate()
        setLoading(false)
      })

      let req: number | null = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          camera.position.y = 10
          camera.position.x =
            p.x + Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z + Math.sin(rotSpeed) + p.x * Math.cos(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

      return () => {
        if (typeof req === 'number') {
          cancelAnimationFrame(req)
        }
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [renderer, handleWindowResize])

  return (
    <Box
      ref={refContainer}
      className="computer"
      m="auto"
      mt={['20px', '-60px', '-120px']}
      mb={['-40px', '-140px', '-200px']}
      w={['280', '480', '640']}
      h={['280', '480', '640']}
      position="relative"
    >
      {loading && (
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          display="flex"
          flexDirection="column"
          gap={2}
          alignItems="center"
        >
          <Spinner
            size="xl"
            thickness="4px"
            speed="0.65s"
            emptyColor="cyan.200"
            color="orange.500"
            label="Loading..."
          />
          <Text>Loading 3d model...</Text>
        </Box>
      )}
    </Box>
  )
}

export default Computer
