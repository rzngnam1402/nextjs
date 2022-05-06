import Link from 'next/link'
import React from 'react'

const ClientsPage = () => {
  const clients = [
    { id: 'max', name: 'maximilian' },
    { id: 'manu', name: 'manuel' },

  ]

  return (
    <div>
      <h1>
        The Clients Page
      </h1>
      <ul>
        {
          clients.map(client => <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>)
        }
      </ul>
    </div>
  )
}

export default ClientsPage