import { s, a } from '../../utils';
import ListScreenTemplate from '../../../src/templates/screens/ListScreenTemplate';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
    title: 'Templates/Screens/ListScreenTemplate',
    component: ListScreenTemplate,
    argTypes: a({}),
};

const Template = (args) => (
    <Router>
        <ListScreenTemplate {...args} />
    </Router>
);

export const basic = s(Template, {
    //filterName: undefined,
    //filters: undefined,
    //navigationMode: 'state',
    name: 'mytypes',
    singularName: 'mytype',
    //onNewClick: undefined,
    columns: [{ id: 'id' }],
    //list: undefined,
    //breadcrumbs: undefined,
    //defaultRowsPerPage: undefined,
    //singularName: undefined,
    //listRoute: undefined,
    //listFirstPageRoute: undefined,
    //displayRoute: undefined,
    //editRoute: undefined,
    //newRoute: undefined,
    //deleteQueryName: undefined,
    //search: undefined,
    //searchSwitch: undefined,
    //deletable: undefined,
    mocks: {
        useQueryMocks: [
            async () => ({
                data: {
                    searchMytypes: {
                        cursor: 'abcd',
                        count: 12,
                        items: [
                            { id: 'a01' },
                            { id: 'a02' },
                            { id: 'a03' },
                            { id: 'a04' },
                            { id: 'a05' },
                            { id: 'a06' },
                            { id: 'a07' },
                            { id: 'a08' },
                            { id: 'a09' },
                            { id: 'a10' },
                        ],
                    },
                },
            }),
        ],
    },
});
