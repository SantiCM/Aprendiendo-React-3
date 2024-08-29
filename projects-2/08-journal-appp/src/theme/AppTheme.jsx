import { ThemeProvider } from "@emotion/react"
import { purpleTheme } from "./purpleTheme"
import { CssBaseline } from "@mui/material"

export const AppTheme = ( { children } ) => {

    return (
        
    <ThemeProvider theme={purpleTheme}>
      
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      
      <CssBaseline />
      
      {children}
    
    </ThemeProvider>

    )

}