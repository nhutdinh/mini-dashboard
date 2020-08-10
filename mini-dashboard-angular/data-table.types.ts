export interface Display_property {
  type: string;
  image: string;
}

export interface Attribute {
  urn: string;
  created_at: string;
  updated_at: string;
  content: string;
  properties?: any;
  display_properties?: Display_property;
}

export interface Link {
  self: string;
  related?: string;
}

export interface Author {
  links: Link;
}

export interface Publisher {
  links: Link;
}

export interface Relationship {
  authors: Author;
  publishers: Publisher;
}

export interface Book {
  id: string;
  type: string;
  links: Link;
  attributes: Attribute;
  relationships: Relationship;
}

export interface Links {
  first: string;
  last: string;
}

export interface Data {
  data: Book[];
  links: Links;
}
