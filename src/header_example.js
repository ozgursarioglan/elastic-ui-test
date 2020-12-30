import React from "react";

import {
  EuiAvatar,
  EuiHeader,
  EuiHeaderBreadcrumbs,
  EuiHeaderLogo,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderSectionItemButton,
  EuiIcon
} from "@elastic/eui";

export class HeaderExample extends React.Component {
  render() {
    return (
      <EuiHeader>
        <EuiHeaderSection>
          <EuiHeaderSectionItem border="right">
            {this.renderLogo()}
          </EuiHeaderSectionItem>

          {this.renderBreadcrumbs()}
        </EuiHeaderSection>

        <EuiHeaderSection side="right">
          <EuiHeaderSectionItem>{this.renderSearch()}</EuiHeaderSectionItem>

          <EuiHeaderSectionItem>{this.renderUser()}</EuiHeaderSectionItem>

          <EuiHeaderSectionItem>{this.renderApps()}</EuiHeaderSectionItem>
        </EuiHeaderSection>
      </EuiHeader>
    );
  }

  renderLogo() {
    return <EuiHeaderLogo href="#" aria-label="Go to home page" />;
  }

  renderBreadcrumbs() {
    const breadcrumbs = [
      {
        text: "Parent",
        href: "#"
      },
      {
        text: "Child"
      }
    ];

    return <EuiHeaderBreadcrumbs breadcrumbs={breadcrumbs} />;
  }

  renderSearch() {
    return (
      <EuiHeaderSectionItemButton aria-label="Search">
        <EuiIcon type="search" />
      </EuiHeaderSectionItemButton>
    );
  }

  renderUser() {
    return (
      <EuiHeaderSectionItemButton aria-label="User">
        <EuiAvatar name="User" size="m" />
      </EuiHeaderSectionItemButton>
    );
  }

  renderApps() {
    return (
      <EuiHeaderSectionItemButton aria-label="Apps">
        <EuiIcon type="apps" />
      </EuiHeaderSectionItemButton>
    );
  }
}
