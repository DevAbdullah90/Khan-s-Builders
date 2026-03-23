import { type SchemaTypeDefinition } from 'sanity'
import { homepage } from './homepage'
import { project } from './project'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepage as any, project as any],
}
