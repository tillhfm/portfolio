"use client"

import React from "react"

/** Internal state for {@link ErrorBoundary}. */
interface ErrorBoundaryState {
   hasError: boolean
}

/**
 * React class error boundary that catches unhandled errors in its child tree
 * and renders a localised fallback UI. Must be a class component because
 * `getDerivedStateFromError` / `componentDidCatch` are not available as hooks.
 */
export class ErrorBoundary extends React.Component<{ children: React.ReactNode }, ErrorBoundaryState> {
   constructor(props: { children: React.ReactNode }) {
      super(props)
      this.state = { hasError: false }
   }

   /**
    * Called synchronously after a descendant throws. Returns state that triggers
    * the fallback render. Static because React calls it before the instance renders.
    */
   static getDerivedStateFromError(): ErrorBoundaryState {
      return { hasError: true }
   }

   /**
    * Called after the fallback is rendered. Logs the error and component stack;
    * a production error monitor could be wired in here.
    * @param error - The thrown error.
    * @param info - Contains `componentStack` for tracing the failing component.
    */
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
