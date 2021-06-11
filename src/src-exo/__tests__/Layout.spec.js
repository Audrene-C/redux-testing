import { shallow, mount } from 'enzyme';
import Home from '../components/Home';
import Layout from '../components/Layout';
import '../setUpTests';
import renderer from 'react-test-renderer';

//Créer un mock de Home
jest.mock("../components/Home", () => {
    return "home-component";
});

describe('Layout snapshot',()=>{

    //check if Layout renders without crashing
    it('It renders without crashing', () => {
        //Créer le expect
        let wrapper = shallow(<Layout />);
        expect(wrapper);
    });

    it('It renders correctly', () => {
        //Créer snapshot
        let wrapper = shallow(<Layout />);
        expect(wrapper).toMatchSnapshot();
    })

    it('It renders Home', () => {
        const wrapper = mount(<Layout />);
        let home = wrapper.find('home-component');
        expect(home.props.fetchRandomNumber);
    });
});
