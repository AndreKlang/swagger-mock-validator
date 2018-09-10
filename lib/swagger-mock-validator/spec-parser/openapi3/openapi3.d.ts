/**
 * This file was automatically generated by json-schema-to-typescript from
 * https://github.com/OAI/OpenAPI-Specification/blob/49e784d7b7800da8732103aa3ac56bc7ccde5cfb/schemas/v3.0/schema.yaml.
 * The file has been manually edited to improve definitions.
 */

export type Parameter = ParameterWithSchema | ParameterWithContent;
export type ParameterWithSchema = ParameterWithSchemaWithExample | ParameterWithSchemaWithExamples;
export type ParameterWithSchemaWithExample =
  | ParameterWithSchemaWithExampleInPath
  | ParameterWithSchemaWithExampleInQuery
  | ParameterWithSchemaWithExampleInHeader
  | ParameterWithSchemaWithExampleInCookie;
export type ParameterWithSchemaWithExamples =
  | ParameterWithSchemaWithExamplesInPath
  | ParameterWithSchemaWithExamplesInQuery
  | ParameterWithSchemaWithExamplesInHeader
  | ParameterWithSchemaWithExamplesInCookie;
export type ParameterWithContent = ParameterWithContentInPath | ParameterWithContentNotInPath;
export type MediaType = MediaTypeWithExample | MediaTypeWithExamples;
export type Header = HeaderWithSchema | HeaderWithContent;
export type HeaderWithSchema = HeaderWithSchemaWithExample | HeaderWithSchemaWithExamples;
export type Link = LinkWithOperationRef | LinkWithOperationId;
export type SecurityScheme =
  | ApiKeySecurityScheme
  | HttpSecurityScheme
  | OAuth2SecurityScheme
  | OpenIdConnectSecurityScheme;
export type HttpSecurityScheme = NonBearerHttpSecurityScheme | BearerHttpSecurityScheme;

export type HttpMethod = 'get' | 'put' | 'post' | 'delete' | 'options' | 'head' | 'patch' | 'trace';

type Openapi3CustomFormat = 'int32' | 'int64' | 'float' | 'double' | 'byte' | 'binary' | 'date' | 'date-time' |
    'password';

type JsonSchemaDraft0Format = 'date-time' | 'email' | 'hostname' | 'ipv4' | 'ipv6' | 'uri';

type Format = Openapi3CustomFormat | JsonSchemaDraft0Format;

export interface Openapi3Schema {
  openapi: string;
  info: Info;
  externalDocs?: ExternalDocumentation;
  servers?: Server[];
  security?: SecurityRequirement[];
  tags?: Tag[];
  paths: Paths;
  components?: Components;
  /**
   * This interface was referenced by `Openapi3Schema`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface Info {
  title: string;
  description?: string;
  termsOfService?: string;
  contact?: Contact;
  license?: License;
  version: string;
  /**
   * This interface was referenced by `Info`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface Contact {
  name?: string;
  url?: string;
  email?: string;
  /**
   * This interface was referenced by `Contact`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface License {
  name: string;
  url?: string;
  /**
   * This interface was referenced by `License`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface ExternalDocumentation {
  description?: string;
  url: string;
  /**
   * This interface was referenced by `ExternalDocumentation`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface Server {
  url: string;
  description?: string;
  variables?: {
    [k: string]: ServerVariable;
  };
  /**
   * This interface was referenced by `Server`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface ServerVariable {
  enum?: string[];
  default: string;
  description?: string;
  /**
   * This interface was referenced by `ServerVariable`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface SecurityRequirement {
  [k: string]: string[];
}
export interface Tag {
  name: string;
  description?: string;
  externalDocs?: ExternalDocumentation;
  /**
   * This interface was referenced by `Tag`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface Paths {
  [name: string]: PathItem;
}
/**
 * This interface was referenced by `Paths`'s JSON-Schema definition
 * via the `patternProperty` "^\/".
 */
export interface PathItem {
  $ref?: string;
  summary?: string;
  description?: string;
  get?: Operation;
  put?: Operation;
  post?: Operation;
  delete?: Operation;
  options?: Operation;
  head?: Operation;
  patch?: Operation;
  trace?: Operation;
  servers?: Server[];
  parameters?: Array<Parameter | Reference>;
  /**
   * This interface was referenced by `PathItem`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface Operation {
  tags?: string[];
  summary?: string;
  description?: string;
  externalDocs?: ExternalDocumentation;
  operationId?: string;
  parameters?: Array<Parameter | Reference>;
  requestBody?: RequestBody | Reference;
  responses: Responses;
  callbacks?: {
    [k: string]: Callback | Reference;
  };
  deprecated?: boolean;
  security?: SecurityRequirement[];
  servers?: Server[];
  /**
   * This interface was referenced by `Operation`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface ParameterWithSchemaWithExampleInPath {
  name: string;
  in: 'path';
  description?: string;
  required: true;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  style?: 'matrix' | 'label' | 'simple';
  explode?: boolean;
  allowReserved?: boolean;
  schema: Schema | Reference;
  example?: any;
  /**
   * This interface was referenced by `ParameterWithSchemaWithExampleInPath`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface Schema {
  title?: string;
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: boolean;
  minimum?: number;
  exclusiveMinimum?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxProperties?: number;
  minProperties?: number;
  required?: string[];
  enum?: any[];
  type?: 'array' | 'boolean' | 'integer' | 'number' | 'object' | 'string';
  not?: Schema | Reference;
  allOf?: Array<Schema | Reference>;
  oneOf?: Array<Schema | Reference>;
  anyOf?: Array<Schema | Reference>;
  items?: Schema | Reference;
  properties?: {
    [k: string]: Schema | Reference;
  };
  additionalProperties?: Schema | Reference | boolean;
  description?: string;
  format?: Format;
  default?: any;
  nullable?: boolean;
  discriminator?: Discriminator;
  readOnly?: boolean;
  writeOnly?: boolean;
  example?: any;
  externalDocs?: ExternalDocumentation;
  deprecated?: boolean;
  xml?: Xml;
  /**
   * This interface was referenced by `Schema`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface Reference {
  $ref: string;
  [k: string]: any;
}
export interface Discriminator {
  propertyName: string;
  mapping?: {
    [k: string]: string;
  };
  [k: string]: any;
}
export interface Xml {
  name?: string;
  namespace?: string;
  prefix?: string;
  attribute?: boolean;
  wrapped?: boolean;
  /**
   * This interface was referenced by `Xml`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface ParameterWithSchemaWithExampleInQuery {
  name: string;
  in: 'query';
  description?: string;
  required?: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  style?: 'form' | 'spaceDelimited' | 'pipeDelimited' | 'deepObject';
  explode?: boolean;
  allowReserved?: boolean;
  schema: Schema | Reference;
  example?: any;
  /**
   * This interface was referenced by `ParameterWithSchemaWithExampleInQuery`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface ParameterWithSchemaWithExampleInHeader {
  name: string;
  in: 'header';
  description?: string;
  required?: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  style?: 'simple';
  explode?: boolean;
  allowReserved?: boolean;
  schema: Schema | Reference;
  example?: any;
  /**
   * This interface was referenced by `ParameterWithSchemaWithExampleInHeader`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface ParameterWithSchemaWithExampleInCookie {
  name: string;
  in: 'cookie';
  description?: string;
  required?: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  style?: 'form';
  explode?: boolean;
  allowReserved?: boolean;
  schema: Schema | Reference;
  example?: any;
  /**
   * This interface was referenced by `ParameterWithSchemaWithExampleInCookie`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface ParameterWithSchemaWithExamplesInPath {
  name: string;
  in: 'path';
  description?: string;
  required: true;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  style?: 'matrix' | 'label' | 'simple';
  explode?: boolean;
  allowReserved?: boolean;
  schema: Schema | Reference;
  examples: {
    [k: string]: Example | Reference;
  };
  /**
   * This interface was referenced by `ParameterWithSchemaWithExamplesInPath`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface Example {
  summary?: string;
  description?: string;
  value?: any;
  externalValue?: string;
  /**
   * This interface was referenced by `Example`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface ParameterWithSchemaWithExamplesInQuery {
  name: string;
  in: 'query';
  description?: string;
  required?: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  style?: 'form' | 'spaceDelimited' | 'pipeDelimited' | 'deepObject';
  explode?: boolean;
  allowReserved?: boolean;
  schema: Schema | Reference;
  examples: {
    [k: string]: Example | Reference;
  };
  /**
   * This interface was referenced by `ParameterWithSchemaWithExamplesInQuery`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface ParameterWithSchemaWithExamplesInHeader {
  name: string;
  in: 'header';
  description?: string;
  required?: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  style?: 'simple';
  explode?: boolean;
  allowReserved?: boolean;
  schema: Schema | Reference;
  examples: {
    [k: string]: Example | Reference;
  };
  /**
   * This interface was referenced by `ParameterWithSchemaWithExamplesInHeader`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface ParameterWithSchemaWithExamplesInCookie {
  name: string;
  in: 'cookie';
  description?: string;
  required?: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  style?: 'form';
  explode?: boolean;
  allowReserved?: boolean;
  schema: Schema | Reference;
  examples: {
    [k: string]: Example | Reference;
  };
  /**
   * This interface was referenced by `ParameterWithSchemaWithExamplesInCookie`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface ParameterWithContentInPath {
  name: string;
  in: 'path';
  description?: string;
  required?: true;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  content: {
    [k: string]: MediaType;
  };
  /**
   * This interface was referenced by `ParameterWithContentInPath`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface MediaTypeWithExample {
  schema?: Schema | Reference;
  example?: any;
  encoding?: {
    [k: string]: Encoding;
  };
  /**
   * This interface was referenced by `MediaTypeWithExample`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface Encoding {
  contentType?: string;
  headers?: {
    [k: string]: Header;
  };
  style?: 'form' | 'spaceDelimited' | 'pipeDelimited' | 'deepObject';
  explode?: boolean;
  allowReserved?: boolean;
}
export interface HeaderWithSchemaWithExample {
  description?: string;
  required?: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  style?: 'simple';
  explode?: boolean;
  allowReserved?: boolean;
  schema: Schema | Reference;
  example?: any;
  /**
   * This interface was referenced by `HeaderWithSchemaWithExample`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface HeaderWithSchemaWithExamples {
  description?: string;
  required?: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  style?: 'simple';
  explode?: boolean;
  allowReserved?: boolean;
  schema: Schema | Reference;
  examples: {
    [k: string]: Example | Reference;
  };
  /**
   * This interface was referenced by `HeaderWithSchemaWithExamples`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface HeaderWithContent {
  description?: string;
  required?: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  content: {
    [k: string]: MediaType;
  };
  /**
   * This interface was referenced by `HeaderWithContent`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface MediaTypeWithExamples {
  schema?: Schema | Reference;
  examples: {
    [k: string]: Example | Reference;
  };
  encoding?: {
    [k: string]: Encoding;
  };
  /**
   * This interface was referenced by `MediaTypeWithExamples`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface ParameterWithContentNotInPath {
  name: string;
  in: 'query' | 'header' | 'cookie';
  description?: string;
  required?: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  content: {
    [k: string]: MediaType;
  };
  /**
   * This interface was referenced by `ParameterWithContentNotInPath`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}

export interface Content {
  [k: string]: MediaType;
}

export interface RequestBody {
  description?: string;
  content: Content;
  required?: boolean;
  /**
   * This interface was referenced by `RequestBody`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface Responses {
  [statusCode: number]: Response | Reference;
  default?: Response | Reference;
}

export interface ResponseHeaders {
    [k: string]: Header | Reference;
}

export interface Response {
  description: string;
  headers?: ResponseHeaders;
  content?: Content;
  links?: {
    [k: string]: Link | Reference;
  };
  /**
   * This interface was referenced by `Response`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface LinkWithOperationRef {
  operationRef?: string;
  parameters?: {
    [k: string]: any;
  };
  requestBody?: any;
  description?: string;
  server?: Server;
  /**
   * This interface was referenced by `LinkWithOperationRef`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface LinkWithOperationId {
  operationId?: string;
  parameters?: {
    [k: string]: any;
  };
  requestBody?: any;
  description?: string;
  server?: Server;
  /**
   * This interface was referenced by `LinkWithOperationId`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface Callback {
  [k: string]: PathItem;
}
export interface Components {
  schemas?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
     */
    [k: string]: Reference | Schema;
  };
  responses?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
     */
    [k: string]: Reference | Response;
  };
  parameters?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
     */
    [k: string]: Reference | Parameter;
  };
  examples?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
     */
    [k: string]: Reference | Example;
  };
  requestBodies?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
     */
    [k: string]: Reference | RequestBody;
  };
  headers?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
     */
    [k: string]: Reference | Header;
  };
  securitySchemes?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
     */
    [k: string]: Reference | SecurityScheme;
  };
  links?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
     */
    [k: string]: Reference | Link;
  };
  callbacks?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9\.\-_]+$".
     */
    [k: string]: Reference | Callback;
  };
  /**
   * This interface was referenced by `Components`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface ApiKeySecurityScheme {
  type: 'apiKey';
  name: string;
  in: 'header' | 'query' | 'cookie';
  description?: string;
  /**
   * This interface was referenced by `ApiKeySecurityScheme`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface NonBearerHttpSecurityScheme {
  scheme: string;
  description?: string;
  type: 'http';
  /**
   * This interface was referenced by `NonBearerHttpSecurityScheme`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface BearerHttpSecurityScheme {
  scheme: 'bearer';
  bearerFormat?: string;
  type: 'http';
  description?: string;
  /**
   * This interface was referenced by `BearerHttpSecurityScheme`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface OAuth2SecurityScheme {
  type: 'oauth2';
  flows: OAuthFlows;
  description?: string;
  /**
   * This interface was referenced by `OAuth2SecurityScheme`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface OAuthFlows {
  implicit?: ImplicitOAuthFlow;
  password?: PasswordOAuthFlow;
  clientCredentials?: ClientCredentialsFlow;
  authorizationCode?: AuthorizationCodeOAuthFlow;
  /**
   * This interface was referenced by `OAuthFlows`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface ImplicitOAuthFlow {
  authorizationUrl: string;
  refreshUrl?: string;
  scopes: {
    [k: string]: string;
  };
  /**
   * This interface was referenced by `ImplicitOAuthFlow`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface PasswordOAuthFlow {
  tokenUrl: string;
  refreshUrl?: string;
  scopes?: {
    [k: string]: string;
  };
  /**
   * This interface was referenced by `PasswordOAuthFlow`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface ClientCredentialsFlow {
  tokenUrl: string;
  refreshUrl?: string;
  scopes?: {
    [k: string]: string;
  };
  /**
   * This interface was referenced by `ClientCredentialsFlow`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface AuthorizationCodeOAuthFlow {
  authorizationUrl: string;
  tokenUrl: string;
  refreshUrl?: string;
  scopes?: {
    [k: string]: string;
  };
  /**
   * This interface was referenced by `AuthorizationCodeOAuthFlow`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}
export interface OpenIdConnectSecurityScheme {
  type: 'openIdConnect';
  openIdConnectUrl: string;
  description?: string;
  /**
   * This interface was referenced by `OpenIdConnectSecurityScheme`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: any;
}