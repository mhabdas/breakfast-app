import React, { ReactType } from 'react'
import Firebase from './Firebase'
const FirebaseContext = React.createContext<Firebase | null>(null)

type Props = {}

export const withFirebase = (Component: ReactType) => {
  const FirebaseComponent = (props: Props) => (
    <FirebaseContext.Consumer>{firebase => <Component {...props} firebase={firebase} />}</FirebaseContext.Consumer>
  )
  FirebaseComponent.displayName = 'FirebaseComponent'
  return FirebaseComponent
}

export { FirebaseContext }
