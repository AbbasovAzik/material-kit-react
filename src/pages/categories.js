import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';
import { CategoriesListToolbar } from '../components/categories/categories-list-toolbar';
import { CategoriesListResults } from '../components/categories/categories-list-results';

const Categories = () => (
  <>
    <Head>
      <title>
        Kateqoriyalar | Iddia.az
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <CategoriesListToolbar />
        <Box sx={{ mt: 3 }}>
          <CategoriesListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);
Categories.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Categories;
