import { createSchema, createYoga } from 'graphql-yoga';
import { readFileSync } from 'node:fs';
import resolvers from './graphql/resolvers/index.js'
import { fileURLToPath } from 'node:url';

const schemaPath = fileURLToPath(new URL('./graphql/schema.graphql', import.meta.url));
const schema = createSchema({
    typeDefs: readFileSync(schemaPath, 'utf8'),
    resolvers,
});

export const server = createYoga({ schema });