import MSR from '@/api/http/index';
import { GetApiTestList, GetApiTestListUrl } from '@/api/requrls/api-test';
import { ApiTestListI } from '@/models/api-test';
import CommonReponse from '@/models/common';

export function getTableList(current: number, pageSize: number) {
  return MSR.get<CommonReponse<ApiTestListI>>({ url: `${GetApiTestList}/${current}/${pageSize}` });
}

export function getlist() {
  return MSR.get<CommonReponse<ApiTestListI>>({ url: GetApiTestListUrl });
}
