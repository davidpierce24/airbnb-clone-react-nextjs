/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoiZGF2eXAyNCIsImEiOiJjbDkzYXJvOXQxc2U5M29ud3pzanV3cDYyIn0.5Z1EGEeyWung0fm4iImpZw'
  },
}

module.exports = nextConfig
