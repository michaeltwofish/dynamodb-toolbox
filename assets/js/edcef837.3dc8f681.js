"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[325],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(n),y=a,c=u["".concat(l,".").concat(y)]||u[y]||m[y]||r;return n?i.createElement(c,o(o({ref:t},d),{},{components:n})):i.createElement(c,o({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const r={},o="Type Inference",p={unversionedId:"type-inference/index",id:"type-inference/index",title:"Type Inference",description:"Since the v0.4, most Entity methods types are inferred from an Entity definition. This is still experimental and may change in the future.",source:"@site/docs/type-inference/index.md",sourceDirName:"type-inference",slug:"/type-inference/",permalink:"/dynamodb-toolbox/docs/type-inference/",draft:!1,editUrl:"https://github.com/jeremydaly/dynamodb-toolbox/tree/main/docs/docs/type-inference/index.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Adding Custom Parameters and Clauses",permalink:"/dynamodb-toolbox/docs/custom-parameters/"},next:{title:"Contributions and Feedback",permalink:"/dynamodb-toolbox/docs/contributing/"}},l={},s=[{value:"Overlays",id:"overlays",level:2},{value:"Utility Types",id:"utility-types",level:2},{value:"EntityItem",id:"entityitem",level:3},{value:"Options",id:"options",level:3}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"type-inference"},"Type Inference"),(0,a.kt)("p",null,"Since the v0.4, most ",(0,a.kt)("inlineCode",{parentName:"p"},"Entity")," methods types are inferred from an ",(0,a.kt)("inlineCode",{parentName:"p"},"Entity")," definition. This is still experimental and may change in the future."),(0,a.kt)("p",null,"The following options are implemented:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd11 ",(0,a.kt)("inlineCode",{parentName:"li"},"partitionKey"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"sortKey"),": They are used, along with array-based mapped attributes to infer the primary key type."),(0,a.kt)("li",{parentName:"ul"},"\u26a1\ufe0f ",(0,a.kt)("inlineCode",{parentName:"li"},"autoExecute"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"execute"),": If the ",(0,a.kt)("inlineCode",{parentName:"li"},"execute")," option is set to ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," (either in the Entity definition or the method options), the method responses are typed as ",(0,a.kt)("inlineCode",{parentName:"li"},"DocumentClient.<METHOD>ItemInput"),"."),(0,a.kt)("li",{parentName:"ul"},"\ud83e\uddd0 ",(0,a.kt)("inlineCode",{parentName:"li"},"autoParse"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"parse"),": If the ",(0,a.kt)("inlineCode",{parentName:"li"},"parse")," option is set to ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," (either in the Entity definition or the method options), the method responses are typed as ",(0,a.kt)("inlineCode",{parentName:"li"},"DocumentClient.<METHOD>ItemOutput"),"."),(0,a.kt)("li",{parentName:"ul"},"\u270d\ufe0f ",(0,a.kt)("inlineCode",{parentName:"li"},"typeAlias"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"createdAlias"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"modifiedAlias"),": Aliases are used to compute the parsed responses types. They are also prevented from attribute definitions to avoid conflicts."),(0,a.kt)("li",{parentName:"ul"},"\u23f0 ",(0,a.kt)("inlineCode",{parentName:"li"},"timestamps"),": If the ",(0,a.kt)("inlineCode",{parentName:"li"},"timestamps")," option is set to false, ",(0,a.kt)("inlineCode",{parentName:"li"},"createdAlias")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"modifiedAlias")," are omitted from the parsed responses types."),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc6e ",(0,a.kt)("inlineCode",{parentName:"li"},"required"),": Attributes flagged as ",(0,a.kt)("inlineCode",{parentName:"li"},"required")," are required as needed in ",(0,a.kt)("inlineCode",{parentName:"li"},"put")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"update")," operations. They appear as always defined in parsed responses. Attempting to remove them, either with the ",(0,a.kt)("inlineCode",{parentName:"li"},"$delete")," shorthand or by setting them to ",(0,a.kt)("inlineCode",{parentName:"li"},"null")," causes an error."),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc4d ",(0,a.kt)("inlineCode",{parentName:"li"},"default"),": Required attributes are not required in ",(0,a.kt)("inlineCode",{parentName:"li"},"put")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"update")," operations if they have a ",(0,a.kt)("inlineCode",{parentName:"li"},"default")," value. They appear as always defined in parsed responses."),(0,a.kt)("li",{parentName:"ul"},"\u2702\ufe0f ",(0,a.kt)("inlineCode",{parentName:"li"},"attributes"),": In ",(0,a.kt)("inlineCode",{parentName:"li"},"get")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"queries")," operations, the ",(0,a.kt)("inlineCode",{parentName:"li"},"attributes")," option filter the attributes of the parsed responses types."),(0,a.kt)("li",{parentName:"ul"},"\u261d\ufe0f ",(0,a.kt)("inlineCode",{parentName:"li"},"conditions"),": In ",(0,a.kt)("inlineCode",{parentName:"li"},"put"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"update")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"delete")," operations, the ",(0,a.kt)("inlineCode",{parentName:"li"},"conditions")," attributes are correctly typed."),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udce8 ",(0,a.kt)("inlineCode",{parentName:"li"},"returnValues"),": In ",(0,a.kt)("inlineCode",{parentName:"li"},"put"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"update")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"delete")," operation, the ",(0,a.kt)("inlineCode",{parentName:"li"},"returnValues")," option is interpreted to format the responses."),(0,a.kt)("li",{parentName:"ul"},"\ud83d\ude48 ",(0,a.kt)("inlineCode",{parentName:"li"},"hidden"),": Hidden attributes are omitted from the parsed responses types."),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd17 ",(0,a.kt)("inlineCode",{parentName:"li"},"dependsOn")," option: If the ",(0,a.kt)("inlineCode",{parentName:"li"},"default")," property of a key attribute is a function, you can use the ",(0,a.kt)("inlineCode",{parentName:"li"},"dependsOn")," attribute to enable typing the primary key through the depended-on attributes (i.e. those used in the function).")),(0,a.kt)("p",null,"The following options are not yet implemented:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"alias")," attribute option"),(0,a.kt)("li",{parentName:"ul"},"Table attributes!"),(0,a.kt)("li",{parentName:"ul"},"Secondary indexes names"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"coerce")," option"),(0,a.kt)("li",{parentName:"ul"},"Improved ",(0,a.kt)("inlineCode",{parentName:"li"},"list")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"set")," support\n... And probably more! Feel free to open an issue if needed \ud83e\udd17")),(0,a.kt)("h2",{id:"overlays"},"Overlays"),(0,a.kt)("p",null,"When type infering doesn't cut it, every method supports the possibility of enforcing a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," type, and a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"CompositeKey")," type where needed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"type CustomItem = {\n  pk: string\n  sk: string\n  name: string\n}\n\ntype CustomCompositeKey = {\n  pk: string\n  sk: string\n}\n\nconst { Item } = await MyEntity.get<CustomItem, CustomCompositeKey>({\n  pk: 'pk',\n  sk: 'sk' // \u2705 CustomCompositeKey expected\n}) // \u2705 Item is of type: undefined | CustomItem\n")),(0,a.kt)("p",null,"Overlaying at the Entity level is also possible. The overlay is passed down to every method, and type inference is fully deactivated:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const MyEntity =  new Entity<CustomItem, CustomCompositeKey, typeof table>({\n  ...,\n  table,\n} as const)\n\nawait MyEntity.update({ pk, sk, name }) // \u2705 Overlay CustomItem is used\nawait MyEntity.delete<CustomItem, { foo: "bar" }>({ foo: "bar" }) // \u2705 Entity overlays can still be overridden\n')),(0,a.kt)("p",null,"Write operations ",(0,a.kt)("inlineCode",{parentName:"p"},"condition")," and read operations ",(0,a.kt)("inlineCode",{parentName:"p"},"attributes")," options are also typed as the applied overlay keys and filter the response properties:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const { Item } = await MyEntity.get({ pk, sk }, { attributes: ['incorrect'] }) // \u274c Errors\nconst { Item } = await MyEntity.get({ pk, sk }, { attributes: ['name'] }) // \u2705 Item is of type { name: string }\n")),(0,a.kt)("h2",{id:"utility-types"},"Utility Types"),(0,a.kt)("h3",{id:"entityitem"},"EntityItem"),(0,a.kt)("p",null,"The inferred or overlayed entity items type can be obtained through the ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityItem")," utility type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { EntityItem } from 'dynamodb-toolbox'\n\nconst listUsers = async (): Promise<EntityItem<typeof UserEntity>[]> => {\n  const { Items } = await UserEntity.query(...)\n  return Items\n}\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("p",null,"Sometimes, it can be useful to dynamically set an entity operation options. For instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const queryOptions = {}\n\nif (!isSuperadmin(user)) {\n  queryOptions.beginsWith = 'USER'\n}\n\nconst { Item } = await MyEntity.query(pk, { attributes: ['name', 'age'], ...queryOptions })\n")),(0,a.kt)("p",null,"Sadly, in TS this throws an error, as ",(0,a.kt)("inlineCode",{parentName:"p"},"getOptions")," is typed as ",(0,a.kt)("inlineCode",{parentName:"p"},"{}"),". Using a non-generic ",(0,a.kt)("inlineCode",{parentName:"p"},"GetOptions")," type also throws an error as the entity attribute names are hardly typed, and ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," is not assignable to the ",(0,a.kt)("inlineCode",{parentName:"p"},"attributes")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"conditions")," options."),(0,a.kt)("p",null,"For this purpose, DynamoDB-Toolbox exposes ",(0,a.kt)("inlineCode",{parentName:"p"},"GetOptions"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"PutOptions"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"DeleteOptions"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"UpdateOptions")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryOptions")," utility types:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { QueryOptions } from 'dynamodb-toolbox'\n\nconst queryOptions: QueryOptions<typeof MyEntity> = {}\n\nif (!isSuperadmin(user)) {\n  queryOptions.beginsWith = 'USER'\n}\n\nconst { Item } = await MyEntity.query(pk, { attributes: ['name', 'age'], ...queryOptions })\n")))}m.isMDXComponent=!0}}]);