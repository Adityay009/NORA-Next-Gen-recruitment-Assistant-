import Agent from '@/components/agent'
import React from 'react'

const page = () => {
return (
    <>
    <h3>Interview Generation</h3>

    <Agent
        userName="Adi"
        userId="user1"
        type="generate"
    />
    </>
)
}

export default page
