import EmailClient from '../clients/EmailClient/EmailClient';
import { lightdashConfig } from '../config/lightdashConfig';
import {
    dashboardModel,
    emailModel,
    inviteLinkModel,
    jobModel,
    onboardingModel,
    openIdIdentityModel,
    organizationMemberProfileModel,
    organizationModel,
    passwordResetLinkModel,
    personalAccessTokenModel,
    projectModel,
    savedChartModel,
    sessionModel,
    userModel,
} from '../models/models';
import { DashboardService } from './DashboardService/DashboardService';
import { HealthService } from './HealthService/HealthService';
import { OrganizationService } from './OrganizationService/OrganizationService';
import { PersonalAccessTokenService } from './PersonalAccessTokenService';
import { ProjectService } from './ProjectService/ProjectService';
import { SavedChartService } from './SavedChartsService/SavedChartService';
import { UserService } from './UserService';

const emailClient = new EmailClient({ lightdashConfig });

export const userService = new UserService({
    inviteLinkModel,
    userModel,
    sessionModel,
    emailModel,
    openIdIdentityModel,
    passwordResetLinkModel,
    emailClient,
    organizationMemberProfileModel,
    organizationModel,
    personalAccessTokenModel,
});
export const organizationService = new OrganizationService({
    organizationModel,
    projectModel,
    onboardingModel,
    inviteLinkModel,
    organizationMemberProfileModel,
});

export const projectService = new ProjectService({
    projectModel,
    onboardingModel,
    savedChartModel,
    jobModel,
    emailClient,
});

export const healthService = new HealthService({
    organizationModel,
    lightdashConfig,
});

export const dashboardService = new DashboardService({
    dashboardModel,
});

export const savedChartsService = new SavedChartService({
    projectModel,
    savedChartModel,
});

export const personalAccessTokenService = new PersonalAccessTokenService({
    personalAccessTokenModel,
});
