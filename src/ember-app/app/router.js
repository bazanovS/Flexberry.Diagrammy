import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-diagrammy-акт-приемки-l');
  this.route('i-i-s-diagrammy-акт-приемки-e',
  { path: 'i-i-s-diagrammy-акт-приемки-e/:id' });
  this.route('i-i-s-diagrammy-акт-приемки-e.new',
  { path: 'i-i-s-diagrammy-акт-приемки-e/new' });
  this.route('i-i-s-diagrammy-заказ-l');
  this.route('i-i-s-diagrammy-заказ-e',
  { path: 'i-i-s-diagrammy-заказ-e/:id' });
  this.route('i-i-s-diagrammy-заказ-e.new',
  { path: 'i-i-s-diagrammy-заказ-e/new' });
  this.route('i-i-s-diagrammy-отпуск-материала-l');
  this.route('i-i-s-diagrammy-отпуск-материала-e',
  { path: 'i-i-s-diagrammy-отпуск-материала-e/:id' });
  this.route('i-i-s-diagrammy-отпуск-материала-e.new',
  { path: 'i-i-s-diagrammy-отпуск-материала-e/new' });
  this.route('i-i-s-diagrammy-поставщики-l');
  this.route('i-i-s-diagrammy-поставщики-e',
  { path: 'i-i-s-diagrammy-поставщики-e/:id' });
  this.route('i-i-s-diagrammy-поставщики-e.new',
  { path: 'i-i-s-diagrammy-поставщики-e/new' });
  this.route('i-i-s-diagrammy-складское-место-l');
  this.route('i-i-s-diagrammy-складское-место-e',
  { path: 'i-i-s-diagrammy-складское-место-e/:id' });
  this.route('i-i-s-diagrammy-складское-место-e.new',
  { path: 'i-i-s-diagrammy-складское-место-e/new' });
  this.route('i-i-s-diagrammy-сотрудники-l');
  this.route('i-i-s-diagrammy-сотрудники-e',
  { path: 'i-i-s-diagrammy-сотрудники-e/:id' });
  this.route('i-i-s-diagrammy-сотрудники-e.new',
  { path: 'i-i-s-diagrammy-сотрудники-e/new' });
  this.route('i-i-s-diagrammy-товар-l');
  this.route('i-i-s-diagrammy-товар-e',
  { path: 'i-i-s-diagrammy-товар-e/:id' });
  this.route('i-i-s-diagrammy-товар-e.new',
  { path: 'i-i-s-diagrammy-товар-e/new' });
});

export default Router;
