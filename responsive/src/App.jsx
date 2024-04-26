import {Box,Heading,Image,Center,useBreakpointValue} from '@chakra-ui/react';


function App() {
  const gridColumn = useBreakpointValue({ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' });
  const padding = useBreakpointValue({base: '30px 40px', md: '30px 70px', lg: '30px 100px'})
  return(
    <>
      <Box textAlign='center' bg='#edf2f6' padding={padding} >
        <Heading paddingTop='10px' >Our Clients Speak</Heading>
        <p>We have been working with clients around the world</p>
        <Box display='grid' gridTemplateColumns={gridColumn} mt={10}  gap={10}>
          <Box>
          <Box position='relative' p={5} boxShadow='lg' borderRadius='10px' bg='white' >
            <Heading size='s'>Efficient Collaborating</Heading>
            <p style={{marginTop: '5px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.</p>
            <Box style={{
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              width: '0',
              height: '0',
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderTop: '10px solid white',
              transform: 'translateX(-50%)'
            }} />
          </Box>
            <center>
              <Image src="./images.jpeg" alt="vijay"  borderRadius='full'boxSize='100px' mt={8}/>
            </center>
            <Heading size='md' mt={3}> Vijay</Heading>
            <p style={{marginTop: '5px'}}>CEO at ABC Corporation</p>
          </Box>
          <Box>
            <Box position='relative' p={5} boxShadow='lg' borderRadius='10px' bg='white'>
              <Heading size='s'>Intuitive Design</Heading>
              <p style={{marginTop: '5px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque 
                sed imperdiet nibh lectus feugiat nunc sem.</p>
              <Box style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                width: '0',
                height: '0',
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderTop: '10px solid white',
                transform: 'translateX(-50%)'
              }} />
            </Box>
            <center>
              <Image src="./images.jpeg" alt="vijay"  borderRadius='full'boxSize='100px' mt={8}/>
            </center>
            <Heading size='md' mt={3}> Vijay</Heading>
            <p style={{marginTop: '5px'}}>CEO at ABC Corporation</p>
          </Box>
          <Box>
            <Box position='relative' p={5} boxShadow='lg' borderRadius='10px' bg='white'>
              <Heading size='s'>Mindblowing Service</Heading>
              <p style={{marginTop: '5px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque 
                sed imperdiet nibh lectus feugiat nunc sem.</p>
              <Box style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                width: '0',
                height: '0',
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderTop: '10px solid white',
                transform: 'translateX(-50%)'
              }} />
            </Box>
            <center>
              <Image src="./images.jpeg" alt="vijay"  borderRadius='full'boxSize='100px' mt={8}/>
            </center>
            <Heading size='md' mt={3}> Vijay</Heading>
            <p style={{marginTop: '5px'}}>CEO at ABC Corporation</p>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default App
