"use strict";(self.webpackChunkreact_kakao_maps_sdk_docs=self.webpackChunkreact_kakao_maps_sdk_docs||[]).push([[4],{905:function(e,a,r){r.r(a),r.d(a,{contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return k},metadata:function(){return u},toc:function(){return g}});var n=r(7462),t=r(3366),o=r(7294),s=r(3905),p=r(8086),l=r(1710),i=r(3772),c=function(){var e=(0,l.useKakaoMapsSDK)({apiKey:"6ec8020798deac7ef2f8897ad1c5ccf1"});return o.createElement(i.Map,{loading:e,center:{lat:33.450701,lng:126.570667},style:{width:"100%",height:"450px"},options:{level:3}},o.createElement(i.MapMarker,{position:{lat:33.450701,lng:126.570667},options:{draggable:!0}}))},d=["components"],k={title:"\ub4dc\ub798\uadf8 \uac00\ub2a5\ud55c \ub9c8\ucee4 \uc0dd\uc131\ud558\uae30",sidebar_position:2},m=void 0,u={unversionedId:"sample/overlay/draggableMarker",id:"sample/overlay/draggableMarker",isDocsHomePage:!1,title:"\ub4dc\ub798\uadf8 \uac00\ub2a5\ud55c \ub9c8\ucee4 \uc0dd\uc131\ud558\uae30",description:"\ub9c8\uc6b0\uc2a4\ub85c \ub4dc\ub798\uadf8\uac00 \uac00\ub2a5\ud55c \ub9c8\ucee4\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.",source:"@site/docs/sample/overlay/draggableMarker.mdx",sourceDirName:"sample/overlay",slug:"/sample/overlay/draggableMarker",permalink:"/docs/sample/overlay/draggableMarker",editUrl:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/edit/main/docs/sample/overlay/draggableMarker.mdx",version:"current",sidebarPosition:2,frontMatter:{title:"\ub4dc\ub798\uadf8 \uac00\ub2a5\ud55c \ub9c8\ucee4 \uc0dd\uc131\ud558\uae30",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ub9c8\ucee4 \uc0dd\uc131\ud558\uae30",permalink:"/docs/sample/overlay/basicMarker"},next:{title:"\ub2e4\ub978 \uc774\ubbf8\uc9c0\ub85c \ub9c8\ucee4 \uc0dd\uc131\ud558\uae30",permalink:"/docs/sample/overlay/basicMarkerImage"}},g=[{value:"Source Code",id:"source-code",children:[]}],M={toc:g};function b(e){var a=e.components,r=(0,t.Z)(e,d);return(0,s.kt)("wrapper",(0,n.Z)({},M,r,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\ub9c8\uc6b0\uc2a4\ub85c \ub4dc\ub798\uadf8\uac00 \uac00\ub2a5\ud55c \ub9c8\ucee4\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,s.kt)(c,{mdxType:"SampleCreateMap"}),(0,s.kt)("h3",{id:"source-code"},"Source Code"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"original docs : ",(0,s.kt)("a",{parentName:"p",href:"https://apis.map.kakao.com/web/sample/draggableMarker/"},"https://apis.map.kakao.com/web/sample/draggableMarker/"))),(0,s.kt)(p.Z,{className:"language-jsx",mdxType:"CodeBlock"},'import React from "react";\nimport { useKakaoMapsSDK } from "react-kakao-maps-sdk/hooks";\nimport { Map, MapMarker } from "react-kakao-maps-sdk";\n\nconst SampleCreateMap = () => {\n  //  script \ub3d9\uc801 \ub85c\ub529\ud558\ub294 hook, HTML\uc5d0 Sciprt \uc0bd\uc785 \ud558\uc5ec \uc0ac\uc6a9\ud558\uc5ec\ub3c4 \uac00\ub2a5\ud568.\n  const loading = useKakaoMapsSDK({\n    apiKey: process.env.KAKAOMAP_API_KEY,\n  });\n\n  return (\n    <Map // \uc9c0\ub3c4\ub97c \ud45c\uc2dc\ud560 Container\n      loading={loading} // useKakaoMapsSDK\ub97c \uc774\uc6a9\ud558\uc5ec script \ub3d9\uc801 \ub85c\ub529 \ud560 \ub54c \uc0ac\uc6a9\n      center={{\n        // \uc9c0\ub3c4\uc758 \uc911\uc2ec\uc88c\ud45c\n        lat: 33.450701,\n        lng: 126.570667,\n      }}\n      style={{\n        // \uc9c0\ub3c4\uc758 \ud06c\uae30\n        width: "100%",\n        height: "450px",\n      }}\n      options={{\n        level: 3, // \uc9c0\ub3c4\uc758 \ud655\ub300 \ub808\ubca8\n      }}\n    >\n      <MapMarker // \ub9c8\ucee4\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4\n        position={{\n          // \ub9c8\ucee4\uac00 \ud45c\uc2dc\ub420 \uc704\uce58\uc785\ub2c8\ub2e4\n          lat: 33.450701,\n          lng: 126.570667,\n        }}\n        options={{\n          draggable: true, // \ub9c8\ucee4\uac00 \ub4dc\ub798\uadf8 \uac00\ub2a5\ud558\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4\n        }}\n      />\n    </Map>\n  );\n};\n\nexport default SampleCreateMap;\n'))}b.isMDXComponent=!0}}]);