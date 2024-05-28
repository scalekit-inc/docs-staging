import LabeledCheckbox from "@site/src/components/checkbox";
import Parameters from "../components/parameters";
import { OrganizationAttributes } from "../components/parameters";
import Endpoints from "@site/src/components/endpoint";
import CodeWithHeader from "@site/src/components/CodeWithHeader";
import Subtitle from "@site/src/components/custom";
import { CardTileWithImage, SimpleCode } from "@site/src/components/custom";
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import CodeBlock from "@theme/CodeBlock";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";
import IntersectingHeader from "../components/IntersectingHeader";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  Subtitle,
  LabeledCheckbox,
  CardTileWithImage,
  SimpleCode,
  Tabs,
  TabItem,
  CodeBlock,
  Endpoints,
  CodeWithHeader,
  Parameters,
  OrganizationAttributes,
  IntersectingHeader,
};
