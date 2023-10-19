import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ breadcrumbs }) => {
  return (
    <section className="breadcrumb-section toem-breadcrumb">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-lg-12 text-left">
            <div className="breadcrumb__text">
              <div className="breadcrumb__option breadcrumb-item">
                <a href="/users/dashboard">Dashboard</a>
                {breadcrumbs?.steps &&
                  breadcrumbs.steps.map((breadcrumb, index) => {
                    return (
                      <Link
                        to={{
                          pathname: breadcrumb.target,
                          state: breadcrumb.state && breadcrumb.state,
                          search: breadcrumb.search && breadcrumb.search,
                        }}
                        key={index}
                      >
                        {breadcrumb.name}
                      </Link>
                    );
                  })}
                <span>{breadcrumbs?.currentStep}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
