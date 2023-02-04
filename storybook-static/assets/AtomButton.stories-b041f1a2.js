import{_ as k}from"./iframe-6d2166f2.js";import{b as q,a as u,e as d,u as a,f as w,g as m,j as E,n as I,o as c}from"./vue.esm-bundler-bde78347.js";import{_ as O,i as s,a as F}from"./index-8d94aef0.js";import"../sb-preview/runtime.mjs";const C=["id"],N=["for"],D={__name:"AtomButton",props:{id:{type:String},circle:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},expand:{type:Boolean,default:!1},icon:{type:String},iconPosition:{type:String,default:"left"},iconStyle:{type:String,required:!1,default:"solid"},outline:{type:Boolean,default:!1},rounded:{type:Boolean,required:!1,default:!1},size:{type:String,default:"lg"},text:{type:String},variant:{type:String,default:"primary"}},setup(e){const n=e,P=q(()=>k(()=>import("./TokenIcon-dedf74d6.js"),["./TokenIcon-dedf74d6.js","./vue.esm-bundler-bde78347.js","./index-8d94aef0.js","./TokenIcon-470df6ae.css"],import.meta.url)),V=u(()=>s(n.icon)),_=u(()=>!s(n.text)&&s(n.icon)),T=u(()=>s(n.iconPosition)?`icon-${n.iconPosition}`:"icon");return(R,j)=>(c(),d("button",{id:e.id,type:"button",class:I(["atom-button",{circle:e.circle,disabled:e.disabled,expand:e.expand,outline:e.outline,rounded:e.rounded},a(T),e.size,e.variant])},[a(V)?(c(),w(a(P),{key:0,"icon-style":e.iconStyle,icon:e.icon,size:e.size},null,8,["icon-style","icon","size"])):m("",!0),a(_)?m("",!0):(c(),d("label",{key:1,for:e.id,class:"button-label"},E(e.text),9,N))],10,C))}},o=O(D,[["__scopeId","data-v-7d3110cb"]]);D.__docgenInfo={exportName:"default",displayName:"AtomButton",description:"",tags:{},props:[{name:"id",description:"Unique button id",type:{name:"string"}},{name:"circle",description:"Turn the button into a round circle (for icons)",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",description:"Disabled state for the button",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"expand",description:"Expands the button to 100% of the width avaiable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"icon",description:`FontAwesome (Free) font-family.
Adds an icon to the button`,type:{name:"string"}},{name:"iconPosition",description:"Position of the icon",tags:{},values:["left","right"],type:{name:"string"},defaultValue:{func:!1,value:"'left'"}},{name:"iconStyle",description:`FontAwesome (Free) font-family (regular* or solid).
*Regular has <200 icons, so solid is default.`,tags:{},values:["solid","regular"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'solid'"}},{name:"outline",description:"Turns the button into a 'ghost' button with a simple outline. *",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rounded",description:"Adds rounded edges to the button.",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"size",description:"Size of the button (xs, sm, xl)",tags:{},values:["xs","sm","xl"],type:{name:"string"},defaultValue:{func:!1,value:"'lg'"}},{name:"text",description:"Text contents of the button",type:{name:"string"}},{name:"variant",description:"The color style for the button",tags:{},values:["primary","secondary","tertiary","neutral"],type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}}]};const H={title:"Atomic Design/Atoms/AtomButton",component:o,argTypes:{size:{options:["xs","sm","lg"],control:{type:"select"}},variant:{options:["primary","secondary","tertiary","neutral"],control:{type:"inline-radio"}},icon:{options:F,control:{type:"select"}},iconStyle:{options:["solid","regular"],control:{type:"inline-radio"}},iconPosition:{options:["left","right"],control:{type:"inline-radio"}}}},t={render:e=>({components:{AtomButton:o},setup(){return{args:e}},template:'<AtomButton v-bind="args" />'}),args:{id:"default-button",text:"Default Button",variant:"primary",iconPosition:"left",icon:"anchor",size:"xs",expand:!1,outline:!1,circle:!1,disabled:!1,rounded:!1,iconStyle:"solid"}},r={args:{...t.args,variant:"secondary",iconPosition:"right",size:"sm",iconStyle:"solid"},render:e=>({components:{AtomButton:o},setup(){return{args:e}},template:'<AtomButton v-bind="args" />'})},i={args:{...t.args,variant:"tertiary",size:"lg",iconStyle:"regular"},render:e=>({components:{AtomButton:o},setup(){return{args:e}},template:'<AtomButton v-bind="args" />'})},l={args:{...t.args,size:"lg",outline:!0},render:e=>({components:{AtomButton:o},setup(){return{args:e}},template:'<AtomButton v-bind="args" />'})};var p,f,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      AtomButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<AtomButton v-bind="args" />\`
  }),
  args: {
    id: 'default-button',
    text: 'Default Button',
    variant: 'primary',
    iconPosition: 'left',
    icon: 'anchor',
    size: 'xs',
    expand: false,
    outline: false,
    circle: false,
    disabled: false,
    rounded: false,
    iconStyle: 'solid'
  }
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,b,v;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'secondary',
    // icon: 'bullhorn',
    iconPosition: 'right',
    size: 'sm',
    iconStyle: 'solid'
  },
  render: args => ({
    components: {
      AtomButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<AtomButton v-bind="args" />\`
  })
}`,...(v=(b=r.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var B,h,x;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'tertiary',
    // icon: 'user',
    size: 'lg',
    iconStyle: 'regular'
  },
  render: args => ({
    components: {
      AtomButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<AtomButton v-bind="args" />\`
  })
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var A,S,z;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    size: 'lg',
    outline: true
  },
  render: args => ({
    components: {
      AtomButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`<AtomButton v-bind="args" />\`
  })
}`,...(z=(S=l.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};const J=["Default","SecondaryButton","TertiaryButton","OutlineButton"];export{t as Default,l as OutlineButton,r as SecondaryButton,i as TertiaryButton,J as __namedExportsOrder,H as default};
//# sourceMappingURL=AtomButton.stories-b041f1a2.js.map
