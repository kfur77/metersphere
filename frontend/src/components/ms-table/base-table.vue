<template>
  <a-table
    :row-key="props.rowKey"
    :loading="props.loading"
    :pagination="props.pagination"
    :columns="props.columns"
    :data="props.data"
    :draggable="{}"
    :bordered="props.bordered"
    :scroll="props.scroll"
    @change="_dragChange"
  >
    <template v-for="(item, key, i) in slots" :key="i" #[key]="{ record, rowIndex, column }">
      <slot :name="key" v-bind="{ rowIndex: rowIndex, record: record, column: column }"></slot>
    </template>
  </a-table>
</template>

<script lang="ts" setup>
  import { MsTabelProps } from './type';
  import { TableData } from '@arco-design/web-vue';
  import { useSlots } from 'vue';

  const slots = useSlots();

  const props = defineProps<MsTabelProps>();
  const emit = defineEmits<{
    dragChange: [_data: TableData[]];
  }>();
  const _dragChange = (_data: TableData[]) => {
    if (props.draggable) {
      // eslint-disable-next-line vue/require-explicit-emits
      emit('dragChange', _data);
    }
  };
</script>
