<template>
  <div class="my-container">
    <div>流程编辑器</div>
    <FlowEditor />
    <a-divider />
    <div class="mb-5">ace编辑器</div>
    <AceEditor v-model:content="currentValue" :init="initAce" :theme="aceTheme" :lang="aceLang" />
    <div class="mt-10">
      <span>主题</span>
      <a-radio-group v-model="aceTheme">
        <a-radio value="github_dark">github_dark</a-radio>
        <a-radio value="github">github</a-radio>
        <a-radio value="chrome">chrome</a-radio>
      </a-radio-group>
    </div>
    <div class="mt-10">
      <span>语言</span>
      <a-radio-group v-model="aceLang">
        <a-radio value="javascript">javascript</a-radio>
        <a-radio value="xml">xml</a-radio>
        <a-radio value="json">json</a-radio>
        <a-radio value="html">html</a-radio>
        <a-radio value="java">java</a-radio>
      </a-radio-group>
    </div>
    <a-divider />
    <div class="mt-10">
      <div class="mb-10">表格</div>
      <ms-base-table :scroll="tableScroll" :columns="columns" :data="tableData"></ms-base-table>
    </div>
    <a-divider />
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import FlowEditor from '@/components/flow-editor/index.vue';
  import MsBaseTable from '@/components/ms-table/base-table.vue';
  import { MsTableColumnI, MsTableDataI } from '@/components/ms-table/type';
  import AceEditor, { LangType, ThemeType } from '@/components/ace-editor/index.vue';
  import { getTableList } from '@/api/modules/api-test/index';

  const currentValue = ref('');
  const initAce = (editor: any) => {
    // eslint-disable-next-line no-console
    console.log(editor.getOptions());
  };
  const aceTheme = ref<ThemeType>('github_dark');
  const aceLang = ref<LangType>('javascript');

  const columns: MsTableColumnI = [
    {
      title: 'ID',
      dataIndex: 'num',
    },
    {
      title: '接口名称',
      dataIndex: 'name',
    },
    {
      title: '请求类型',
      dataIndex: 'email',
    },
    {
      title: '责任人',
      dataIndex: 'phone',
    },
    {
      title: '路径',
      dataIndex: 'status',
    },
    {
      title: '标签',
      dataIndex: 'action',
    },
    {
      title: '更新时间',
      dataIndex: 'action',
    },
    {
      title: '用例数',
      dataIndex: 'action',
    },
    {
      title: '用例状态',
      dataIndex: 'action',
    },
    {
      title: '用例通过率',
      dataIndex: 'action',
    },
    {
      title: '接口状态',
      dataIndex: 'action',
    },
    {
      title: '创建时间',
      dataIndex: 'action',
    },
    {
      title: '描述',
      dataIndex: 'action',
    },
    {
      title: '操作',
      slotName: 'action',
      fixed: 'right',
      width: 200,
    },
  ];
  const tableData = ref<MsTableDataI>([]);
  const tableScroll = { x: 2000 };

  const initTable = () => {
    getTableList(1, 10).then((res) => {
      // eslint-disable-next-line no-console
      console.log('请求的内容', res);
    });
  };

  onMounted(() => {
    initTable();
  });
</script>

<style>
  .my-container {
    padding: 16px 20px;
    padding-bottom: 0;
    height: 100vh;
    background-color: #ffffff;
  }
</style>
