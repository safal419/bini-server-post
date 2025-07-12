import type { Schema, Struct } from '@strapi/strapi';

export interface AboutAchievements extends Struct.ComponentSchema {
  collectionName: 'components_about_achievements';
  info: {
    displayName: 'Achievements';
  };
  attributes: {
    clientSatisfaction: Schema.Attribute.BigInteger;
    majorPlantsServed: Schema.Attribute.BigInteger;
    projectsCompleted: Schema.Attribute.BigInteger;
    yearOfExcellence: Schema.Attribute.BigInteger;
  };
}

export interface AboutImages extends Struct.ComponentSchema {
  collectionName: 'components_about_images';
  info: {
    displayName: 'images';
  };
  attributes: {
    alt: Schema.Attribute.String;
    url: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AboutTimelineEvent extends Struct.ComponentSchema {
  collectionName: 'components_about_timeline_events';
  info: {
    displayName: 'Timeline Event';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    images: Schema.Attribute.Component<'about.images', true>;
    year: Schema.Attribute.String;
  };
}

export interface ArticlePic extends Struct.ComponentSchema {
  collectionName: 'components_article_pics';
  info: {
    displayName: 'pic';
  };
  attributes: {
    caption: Schema.Attribute.String;
    category: Schema.Attribute.String;
    path: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ArticleTags extends Struct.ComponentSchema {
  collectionName: 'components_article_tags';
  info: {
    displayName: 'tags';
  };
  attributes: {
    tags: Schema.Attribute.String;
  };
}

export interface ProjectImage extends Struct.ComponentSchema {
  collectionName: 'components_project_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    caption: Schema.Attribute.String;
    category: Schema.Attribute.String;
    url: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ProjectService extends Struct.ComponentSchema {
  collectionName: 'components_project_services';
  info: {
    displayName: 'service';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface ProjectSpecification extends Struct.ComponentSchema {
  collectionName: 'components_project_specifications';
  info: {
    displayName: 'specification';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ProjectTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_project_team_members';
  info: {
    displayName: 'Team Member';
  };
  attributes: {
    Description: Schema.Attribute.String;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
  };
}

export interface ProjectTimelinePhase extends Struct.ComponentSchema {
  collectionName: 'components_project_timeline_phases';
  info: {
    displayName: 'Timeline Phase';
  };
  attributes: {
    completed: Schema.Attribute.Boolean;
    date: Schema.Attribute.String;
    description: Schema.Attribute.String;
    phase: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface TechnologyPartnerProducts extends Struct.ComponentSchema {
  collectionName: 'components_technology_partner_products';
  info: {
    displayName: 'products';
  };
  attributes: {
    products: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.achievements': AboutAchievements;
      'about.images': AboutImages;
      'about.timeline-event': AboutTimelineEvent;
      'article.pic': ArticlePic;
      'article.tags': ArticleTags;
      'project.image': ProjectImage;
      'project.service': ProjectService;
      'project.specification': ProjectSpecification;
      'project.team-member': ProjectTeamMember;
      'project.timeline-phase': ProjectTimelinePhase;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'technology-partner.products': TechnologyPartnerProducts;
    }
  }
}
