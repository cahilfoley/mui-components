import React from 'react'
import Grid from '@material-ui/core/Grid'
import ProductCard from './ProductCard'
import gif from './demo.gif'

export { gif }

export const Demo = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <ProductCard
            title="Some Awesome Report"
            description="This is a lengthy description about how great the report is. It really is super great isn't it? I've run out if things to type, tra-la-la-la-la."
            bannerImage="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            bannerTitle="Contemplative Reptile"
            avatarImage="https://react-material-kit.devias.io/static/images/avatars/avatar_5.png"
            avatarTitle="Some Guy"
            stats={[
              { label: 'Asset Type', value: 'HME' },
              { label: 'Metric', value: 'Efficiency' },
              { label: 'Data Source', value: 'Some DB' },
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <ProductCard
            title="Some Awesome Report"
            description="This is a lengthy description about how great the report is. It really is super great isn't it? I've run out if things to type, tra-la-la-la-la."
            bannerImage="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            bannerTitle="Contemplative Reptile"
            avatarImage="https://react-material-kit.devias.io/static/images/avatars/avatar_5.png"
            avatarTitle="Some Guy"
            stats={[
              { label: 'Asset Type', value: 'Staplers' },
              { label: 'Metric', value: 'Efficiency' },
              { label: 'Data Source', value: 'Some DB' },
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <ProductCard
            title="Some Awesome Report"
            description="This is a lengthy description about how great the report is. It really is super great isn't it? I've run out if things to type, tra-la-la-la-la."
            bannerImage="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            bannerTitle="Contemplative Reptile"
            avatarImage="https://react-material-kit.devias.io/static/images/avatars/avatar_5.png"
            avatarTitle="Some Guy"
            stats={[
              { label: 'Asset Type', value: 'Staplers' },
              { label: 'Metric', value: 'Efficiency' },
              { label: 'Data Source', value: 'Some DB' },
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <ProductCard
            title="Some Awesome Report"
            description="This is a lengthy description about how great the report is. It really is super great isn't it? I've run out if things to type, tra-la-la-la-la."
            bannerImage="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            bannerTitle="Contemplative Reptile"
            avatarImage="https://react-material-kit.devias.io/static/images/avatars/avatar_5.png"
            avatarTitle="Some Guy"
            stats={[
              { label: 'Asset Type', value: 'Staplers' },
              { label: 'Metric', value: 'Efficiency' },
              { label: 'Data Source', value: 'Some DB' },
            ]}
          />
        </Grid>
      </Grid>
    </div>
  )
}
