import { extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
	config: {
		// disableTransitionOnChange: false,
		initialColorMode: "dark",
		useSystemColorMode: true
	},
	colors: {
		primary: {
			main: "#f7b519"
		},
		secondary: {
			main: "#827f78"
		}
	}
})

export default theme