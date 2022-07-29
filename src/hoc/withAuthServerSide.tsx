import React from 'react'

export function withAuthServerSideProps(getServerSidePropsFunc?: Function) {
  return async (context: any) => {
    const user = await getUser(context)
    if (getServerSidePropsFunc) {
      return { props: { user, data: await getServerSidePropsFunc(context, user) } }
    }
    return { props: { user, data: { props: { user } } } }
  }
}

async function getUser(content: any) {
  return {
    id: 1,
    username: 'JBis',
    email: 'test@test.com',
  }
}

// withAuthComponent.tsx
export function withAuthComponent(Component: any) {
  return ({ user, data }: { user: any; data: any }) => {
    if (!user) {
      return <h1>Denied</h1> // or redirect, we can use the Router because we are client side here
    }
    return <Component {...data.props} />
  }
}
