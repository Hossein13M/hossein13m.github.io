export interface NavRouteItem {
  title: string;
  url: string;
  icon: string;
  isActive?: boolean;
  urlType: 'internal' | 'external';
}
