import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISDiagrammyАктПриемкиLForm from './forms/i-i-s-diagrammy-акт-приемки-l';
import IISDiagrammyЗаказLForm from './forms/i-i-s-diagrammy-заказ-l';
import IISDiagrammyОтпускМатериалаLForm from './forms/i-i-s-diagrammy-отпуск-материала-l';
import IISDiagrammyПоставщикиLForm from './forms/i-i-s-diagrammy-поставщики-l';
import IISDiagrammyСкладскоеМестоLForm from './forms/i-i-s-diagrammy-складское-место-l';
import IISDiagrammyСотрудникиLForm from './forms/i-i-s-diagrammy-сотрудники-l';
import IISDiagrammyТоварLForm from './forms/i-i-s-diagrammy-товар-l';
import IISDiagrammyАктПриемкиEForm from './forms/i-i-s-diagrammy-акт-приемки-e';
import IISDiagrammyЗаказEForm from './forms/i-i-s-diagrammy-заказ-e';
import IISDiagrammyОтпускМатериалаEForm from './forms/i-i-s-diagrammy-отпуск-материала-e';
import IISDiagrammyПоставщикиEForm from './forms/i-i-s-diagrammy-поставщики-e';
import IISDiagrammyСкладскоеМестоEForm from './forms/i-i-s-diagrammy-складское-место-e';
import IISDiagrammyСотрудникиEForm from './forms/i-i-s-diagrammy-сотрудники-e';
import IISDiagrammyТоварEForm from './forms/i-i-s-diagrammy-товар-e';
import IISDiagrammyАктПриемкиModel from './models/i-i-s-diagrammy-акт-приемки';
import IISDiagrammyЗаказModel from './models/i-i-s-diagrammy-заказ';
import IISDiagrammyОтпускМатериалаModel from './models/i-i-s-diagrammy-отпуск-материала';
import IISDiagrammyПоставщикиModel from './models/i-i-s-diagrammy-поставщики';
import IISDiagrammyСкладскоеМестоModel from './models/i-i-s-diagrammy-складское-место';
import IISDiagrammyСотрудникиModel from './models/i-i-s-diagrammy-сотрудники';
import IISDiagrammyТЧАктаПриемкиModel from './models/i-i-s-diagrammy-т-ч-акта-приемки';
import IISDiagrammyТЧЗаказаModel from './models/i-i-s-diagrammy-т-ч-заказа';
import IISDiagrammyТоварModel from './models/i-i-s-diagrammy-товар';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-diagrammy-акт-приемки': IISDiagrammyАктПриемкиModel,
    'i-i-s-diagrammy-заказ': IISDiagrammyЗаказModel,
    'i-i-s-diagrammy-отпуск-материала': IISDiagrammyОтпускМатериалаModel,
    'i-i-s-diagrammy-поставщики': IISDiagrammyПоставщикиModel,
    'i-i-s-diagrammy-складское-место': IISDiagrammyСкладскоеМестоModel,
    'i-i-s-diagrammy-сотрудники': IISDiagrammyСотрудникиModel,
    'i-i-s-diagrammy-т-ч-акта-приемки': IISDiagrammyТЧАктаПриемкиModel,
    'i-i-s-diagrammy-т-ч-заказа': IISDiagrammyТЧЗаказаModel,
    'i-i-s-diagrammy-товар': IISDiagrammyТоварModel
  },

  'application-name': 'Diagrammy',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Diagrammy',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Diagrammy',
          title: 'Diagrammy'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'приемка-товара': {
          caption: 'Приемка товара',
          title: 'Приемка товара',
          'i-i-s-diagrammy-акт-приемки-l': {
            caption: 'Акт приемки',
            title: ''
          }
        },
        заказ: {
          caption: 'Заказ',
          title: 'Заказ',
          'i-i-s-diagrammy-заказ-l': {
            caption: 'Заказ',
            title: ''
          },
          'i-i-s-diagrammy-отпуск-материала-l': {
            caption: 'Отпуск материала',
            title: ''
          }
        },
        справочники: {
          caption: 'Справочники',
          title: 'Справочники',
          'i-i-s-diagrammy-складское-место-l': {
            caption: 'Складское место',
            title: ''
          },
          'i-i-s-diagrammy-поставщики-l': {
            caption: 'Поставщики',
            title: ''
          },
          'i-i-s-diagrammy-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-diagrammy-товар-l': {
            caption: 'Товар',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-diagrammy-акт-приемки-l': IISDiagrammyАктПриемкиLForm,
    'i-i-s-diagrammy-заказ-l': IISDiagrammyЗаказLForm,
    'i-i-s-diagrammy-отпуск-материала-l': IISDiagrammyОтпускМатериалаLForm,
    'i-i-s-diagrammy-поставщики-l': IISDiagrammyПоставщикиLForm,
    'i-i-s-diagrammy-складское-место-l': IISDiagrammyСкладскоеМестоLForm,
    'i-i-s-diagrammy-сотрудники-l': IISDiagrammyСотрудникиLForm,
    'i-i-s-diagrammy-товар-l': IISDiagrammyТоварLForm,
    'i-i-s-diagrammy-акт-приемки-e': IISDiagrammyАктПриемкиEForm,
    'i-i-s-diagrammy-заказ-e': IISDiagrammyЗаказEForm,
    'i-i-s-diagrammy-отпуск-материала-e': IISDiagrammyОтпускМатериалаEForm,
    'i-i-s-diagrammy-поставщики-e': IISDiagrammyПоставщикиEForm,
    'i-i-s-diagrammy-складское-место-e': IISDiagrammyСкладскоеМестоEForm,
    'i-i-s-diagrammy-сотрудники-e': IISDiagrammyСотрудникиEForm,
    'i-i-s-diagrammy-товар-e': IISDiagrammyТоварEForm
  },

});

export default translations;
