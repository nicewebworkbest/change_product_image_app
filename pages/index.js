import { EmptyState, Layout, Page } from '@shopify/polaris';
import { ResourcePicker } from '@shopify/app-bridge-react';
import ResourceListWithProducts from '../components/ResourceList';
import axios from 'axios';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Index extends React.Component {

	render() {
    return (
      <Page
        primaryAction={{
          content: 'Select products',
          onAction: () => this.setState({ open: true }),
        }}
      >
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={true}
        />
      </Page>
    );
  }

}

export default Index;
