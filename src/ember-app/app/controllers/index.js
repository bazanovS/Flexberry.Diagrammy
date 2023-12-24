import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.приемка-товара.caption'),
          title: i18n.t('forms.application.sitemap.приемка-товара.title'),
          children: [{
            link: 'i-i-s-diagrammy-акт-приемки-l',
            caption: i18n.t('forms.application.sitemap.приемка-товара.i-i-s-diagrammy-акт-приемки-l.caption'),
            title: i18n.t('forms.application.sitemap.приемка-товара.i-i-s-diagrammy-акт-приемки-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.заказ.caption'),
          title: i18n.t('forms.application.sitemap.заказ.title'),
          children: [{
            link: 'i-i-s-diagrammy-заказ-l',
            caption: i18n.t('forms.application.sitemap.заказ.i-i-s-diagrammy-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.заказ.i-i-s-diagrammy-заказ-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-diagrammy-отпуск-материала-l',
            caption: i18n.t('forms.application.sitemap.заказ.i-i-s-diagrammy-отпуск-материала-l.caption'),
            title: i18n.t('forms.application.sitemap.заказ.i-i-s-diagrammy-отпуск-материала-l.title'),
            icon: 'file',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочники.caption'),
          title: i18n.t('forms.application.sitemap.справочники.title'),
          children: [{
            link: 'i-i-s-diagrammy-складское-место-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-diagrammy-складское-место-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-diagrammy-складское-место-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-diagrammy-поставщики-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-diagrammy-поставщики-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-diagrammy-поставщики-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-diagrammy-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-diagrammy-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-diagrammy-сотрудники-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-diagrammy-товар-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-diagrammy-товар-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-diagrammy-товар-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }
      ]
    };
  }),
})