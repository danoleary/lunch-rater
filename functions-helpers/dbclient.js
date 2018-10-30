import { CosmosClient } from '@azure/cosmos'

const endpoint = process.env.COSMOS_ENDPOINT
const masterKey = process.env.COSMOS_KEY

const dbclient = new CosmosClient({ endpoint, auth: { masterKey } })

export default dbclient
