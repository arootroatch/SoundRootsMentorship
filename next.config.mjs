
import withMDX from '@next/mdx'

/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  basePath: '/mentorship'
};

export default withMDX(nextConfig);
