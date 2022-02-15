import { App } from '@vue/runtime-dom';

// 导入所有组件（不推荐）

// import Vant from 'vant';
// import 'vant/lib/index.css';

// 按需加载

import { Button,Field,CellGroup  } from 'vant';

export default function(app:App<Element>){
    // 完整
    // app.use(Vant)

    // 按需引入
    app.use(Button).use(Field).use(CellGroup)
}