declare global {
  interface PageQuery {
    pageNum: number;
    pageSize: number;
  }

  interface PageResult<T> {
    records: { id: string; username: string; nickname: string; mobile: string; gender: number; avatar: string; email: string; status: number; deptName: string; roleNames: string; createTime: string; }[];
    data: any;
    list: T;
    total: number;
  }
  type DialogType = {
    title?: string;
    visible: boolean;
  };

  type OptionType = {
    value: string;
    label: string;
    checked?: boolean;
    children?: OptionType[];
  };
}
export {};
