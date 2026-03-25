"use client"

import React from "react"

interface ErrorBoundaryState {
   hasError: boolean
}

export class ErrorBoundary extends React.Component<{ children: React.ReactNode }, ErrorBoundaryState> {
   constructor(props: { children: React.ReactNode }) {
      super(props)
      this.state = { hasError: false }
   }

   static getDerivedStateFromError(): ErrorBoundaryState {
      return { hasError: true }
   }

   componentDidCatch(error: Error, info: React.ErrorInfo) {
      console.error("[ErrorBoundary]", error, info.componentStack)
   }

   render() {
      if (this.state.hasError) {
         return (
            <div className="flex min-h-screen items-center justify-center text-center px-6">
               <div>
                  <h1 className="text-2xl font-bold mb-2">Etwas ist schiefgelaufen.</h1>
                  <p className="text-muted-foreground">Bitte die Seite neu laden.</p>
               </div>
            </div>
         )
      }

      return this.props.children
   }
}
