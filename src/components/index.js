//把components中所有组件 全局注册
// 通过插件形式
import ImageViewer from './imageView/index.vue';
import XtxSku from './XtxSku/index.vue';

export const componentsPlugin = {
    install(app) {

        app.component('XtxImageViewer', ImageViewer);
        app.component('XtxSku', XtxSku);
    }
}