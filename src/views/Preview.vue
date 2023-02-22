<template>
  <form-create v-model="value" v-model:api="fApi" :rule="rule" :option="option"></form-create>
</template>

<script setup>
import { reactive } from "vue";

const fApi = reactive({})
const rule = [
  {
    "type": "table",
    "children": [
      {
        "type": "tableColumn",
        "props": {
          "prop": "name",
          "label": "姓名",
          "align": "center"
        },
        "_fc_drag_tag": "tableColumn",
        "hidden": false,
        "display": true
      },
      {
        "type": "tableColumn",
        "props": {
          "prop": "date",
          "label": "出生日期",
          "align": "center"
        },
        "_fc_drag_tag": "tableColumn",
        "hidden": false,
        "display": true
      },
      {
        "type": "tableColumn",
        "props": {
          "prop": "address",
          "label": "地址",
          "align": "center"
        },
        "_fc_drag_tag": "tableColumn",
        "hidden": false,
        "display": true
      }
    ],
    "props": {
      "_optionType": 1
    },
    "effect": {
      "fetch": {
        "action": "https://www.fastmock.site/mock/eb3a73bded0d4eef80f0792d1dabbd2a/form-create/api/user",
        "method": "GET",
        "data": {},
        "headers": {},
        "_parse": "function (res){\n   return res.data;\n}",
        "to": "props.data",
        "parse": "[[FORM-CREATE-PREFIX-function (res){\n   return res.data;\n}-FORM-CREATE-SUFFIX]]"
      }
    },
    "_fc_drag_tag": "table",
    "hidden": false,
    "display": true
  },
  {
    "type": "pagination",
    "title": "分页",
    "info": "",
    "props": {
      "total": 100,
      "layout": "prev, pager, next",
      "background": true
    },
    "_fc_drag_tag": "pagination",
    "hidden": false,
    "display": true
  }
]
const option = reactive({
  "form": {
    "isForm": false,
    "labelPosition": "right",
    "size": "default",
    "labelWidth": "125px",
    "hideRequiredAsterisk": false,
    "showMessage": true,
    "inlineMessage": false
  },
  "submitBtn": {
    "show": false,
    "innerText": "提交"
  },
  "resetBtn": {
    "show": false,
    "innerText": "重置"
  }
})
</script>

<style scoped>

</style>
