import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';

configure({ adapter: new EnzymeAdapter() });

const dom = new JSDOM();

global.document = dom.window.document;
