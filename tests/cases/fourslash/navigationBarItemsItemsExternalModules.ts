/// <reference path="fourslash.ts"/>

////{| "itemName": "Bar", "kind": "class" |}export class Bar {
////    {| "itemName": "s", "kind": "property", "parentName": "Bar" |}public s: string;
////}

test.markers().forEach((marker) => {
    verify.navigationBarContains(marker.data.itemName, marker.data.kind, marker.fileName, marker.data.parentName);
});

verify.navigationBarCount(2); // external module node + class + property
