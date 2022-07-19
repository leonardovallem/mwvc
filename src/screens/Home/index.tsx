import type {Component} from 'solid-js'
import Typography from "@suid/material/Typography"
import Stack from "@suid/material/Stack"

import "./style.css"

const Home: Component = () => {
    return <Stack className="home-background"
                  width="100%"
                  height="100vh"
                  alignItems="center"
    >
        <Typography variant="h4" className="home-title">Minecraft World Version Control</Typography>
    </Stack>
}

export default Home
