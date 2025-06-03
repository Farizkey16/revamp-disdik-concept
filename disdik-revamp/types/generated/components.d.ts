import type { Schema, Struct } from '@strapi/strapi';

export interface BeritaTags extends Struct.ComponentSchema {
  collectionName: 'components_berita_tags';
  info: {
    displayName: 'tags';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'berita.tags': BeritaTags;
    }
  }
}
