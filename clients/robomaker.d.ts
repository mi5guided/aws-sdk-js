import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class RoboMaker extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: RoboMaker.Types.ClientConfiguration)
  config: Config & RoboMaker.Types.ClientConfiguration;
  /**
   * Describes one or more simulation jobs.
   */
  batchDescribeSimulationJob(params: RoboMaker.Types.BatchDescribeSimulationJobRequest, callback?: (err: AWSError, data: RoboMaker.Types.BatchDescribeSimulationJobResponse) => void): Request<RoboMaker.Types.BatchDescribeSimulationJobResponse, AWSError>;
  /**
   * Describes one or more simulation jobs.
   */
  batchDescribeSimulationJob(callback?: (err: AWSError, data: RoboMaker.Types.BatchDescribeSimulationJobResponse) => void): Request<RoboMaker.Types.BatchDescribeSimulationJobResponse, AWSError>;
  /**
   * Cancels the specified simulation job.
   */
  cancelSimulationJob(params: RoboMaker.Types.CancelSimulationJobRequest, callback?: (err: AWSError, data: RoboMaker.Types.CancelSimulationJobResponse) => void): Request<RoboMaker.Types.CancelSimulationJobResponse, AWSError>;
  /**
   * Cancels the specified simulation job.
   */
  cancelSimulationJob(callback?: (err: AWSError, data: RoboMaker.Types.CancelSimulationJobResponse) => void): Request<RoboMaker.Types.CancelSimulationJobResponse, AWSError>;
  /**
   * Creates a deployment job.
   */
  createDeploymentJob(params: RoboMaker.Types.CreateDeploymentJobRequest, callback?: (err: AWSError, data: RoboMaker.Types.CreateDeploymentJobResponse) => void): Request<RoboMaker.Types.CreateDeploymentJobResponse, AWSError>;
  /**
   * Creates a deployment job.
   */
  createDeploymentJob(callback?: (err: AWSError, data: RoboMaker.Types.CreateDeploymentJobResponse) => void): Request<RoboMaker.Types.CreateDeploymentJobResponse, AWSError>;
  /**
   * Creates a fleet, a logical group of robots running the same robot application.
   */
  createFleet(params: RoboMaker.Types.CreateFleetRequest, callback?: (err: AWSError, data: RoboMaker.Types.CreateFleetResponse) => void): Request<RoboMaker.Types.CreateFleetResponse, AWSError>;
  /**
   * Creates a fleet, a logical group of robots running the same robot application.
   */
  createFleet(callback?: (err: AWSError, data: RoboMaker.Types.CreateFleetResponse) => void): Request<RoboMaker.Types.CreateFleetResponse, AWSError>;
  /**
   * Creates a robot.
   */
  createRobot(params: RoboMaker.Types.CreateRobotRequest, callback?: (err: AWSError, data: RoboMaker.Types.CreateRobotResponse) => void): Request<RoboMaker.Types.CreateRobotResponse, AWSError>;
  /**
   * Creates a robot.
   */
  createRobot(callback?: (err: AWSError, data: RoboMaker.Types.CreateRobotResponse) => void): Request<RoboMaker.Types.CreateRobotResponse, AWSError>;
  /**
   * Creates a robot application. 
   */
  createRobotApplication(params: RoboMaker.Types.CreateRobotApplicationRequest, callback?: (err: AWSError, data: RoboMaker.Types.CreateRobotApplicationResponse) => void): Request<RoboMaker.Types.CreateRobotApplicationResponse, AWSError>;
  /**
   * Creates a robot application. 
   */
  createRobotApplication(callback?: (err: AWSError, data: RoboMaker.Types.CreateRobotApplicationResponse) => void): Request<RoboMaker.Types.CreateRobotApplicationResponse, AWSError>;
  /**
   * Creates a version of a robot application.
   */
  createRobotApplicationVersion(params: RoboMaker.Types.CreateRobotApplicationVersionRequest, callback?: (err: AWSError, data: RoboMaker.Types.CreateRobotApplicationVersionResponse) => void): Request<RoboMaker.Types.CreateRobotApplicationVersionResponse, AWSError>;
  /**
   * Creates a version of a robot application.
   */
  createRobotApplicationVersion(callback?: (err: AWSError, data: RoboMaker.Types.CreateRobotApplicationVersionResponse) => void): Request<RoboMaker.Types.CreateRobotApplicationVersionResponse, AWSError>;
  /**
   * Creates a simulation application.
   */
  createSimulationApplication(params: RoboMaker.Types.CreateSimulationApplicationRequest, callback?: (err: AWSError, data: RoboMaker.Types.CreateSimulationApplicationResponse) => void): Request<RoboMaker.Types.CreateSimulationApplicationResponse, AWSError>;
  /**
   * Creates a simulation application.
   */
  createSimulationApplication(callback?: (err: AWSError, data: RoboMaker.Types.CreateSimulationApplicationResponse) => void): Request<RoboMaker.Types.CreateSimulationApplicationResponse, AWSError>;
  /**
   * Creates a simulation application with a specific revision id.
   */
  createSimulationApplicationVersion(params: RoboMaker.Types.CreateSimulationApplicationVersionRequest, callback?: (err: AWSError, data: RoboMaker.Types.CreateSimulationApplicationVersionResponse) => void): Request<RoboMaker.Types.CreateSimulationApplicationVersionResponse, AWSError>;
  /**
   * Creates a simulation application with a specific revision id.
   */
  createSimulationApplicationVersion(callback?: (err: AWSError, data: RoboMaker.Types.CreateSimulationApplicationVersionResponse) => void): Request<RoboMaker.Types.CreateSimulationApplicationVersionResponse, AWSError>;
  /**
   * Creates a simulation job.
   */
  createSimulationJob(params: RoboMaker.Types.CreateSimulationJobRequest, callback?: (err: AWSError, data: RoboMaker.Types.CreateSimulationJobResponse) => void): Request<RoboMaker.Types.CreateSimulationJobResponse, AWSError>;
  /**
   * Creates a simulation job.
   */
  createSimulationJob(callback?: (err: AWSError, data: RoboMaker.Types.CreateSimulationJobResponse) => void): Request<RoboMaker.Types.CreateSimulationJobResponse, AWSError>;
  /**
   * Deletes a fleet.
   */
  deleteFleet(params: RoboMaker.Types.DeleteFleetRequest, callback?: (err: AWSError, data: RoboMaker.Types.DeleteFleetResponse) => void): Request<RoboMaker.Types.DeleteFleetResponse, AWSError>;
  /**
   * Deletes a fleet.
   */
  deleteFleet(callback?: (err: AWSError, data: RoboMaker.Types.DeleteFleetResponse) => void): Request<RoboMaker.Types.DeleteFleetResponse, AWSError>;
  /**
   * Deletes a robot.
   */
  deleteRobot(params: RoboMaker.Types.DeleteRobotRequest, callback?: (err: AWSError, data: RoboMaker.Types.DeleteRobotResponse) => void): Request<RoboMaker.Types.DeleteRobotResponse, AWSError>;
  /**
   * Deletes a robot.
   */
  deleteRobot(callback?: (err: AWSError, data: RoboMaker.Types.DeleteRobotResponse) => void): Request<RoboMaker.Types.DeleteRobotResponse, AWSError>;
  /**
   * Deletes a robot application.
   */
  deleteRobotApplication(params: RoboMaker.Types.DeleteRobotApplicationRequest, callback?: (err: AWSError, data: RoboMaker.Types.DeleteRobotApplicationResponse) => void): Request<RoboMaker.Types.DeleteRobotApplicationResponse, AWSError>;
  /**
   * Deletes a robot application.
   */
  deleteRobotApplication(callback?: (err: AWSError, data: RoboMaker.Types.DeleteRobotApplicationResponse) => void): Request<RoboMaker.Types.DeleteRobotApplicationResponse, AWSError>;
  /**
   * Deletes a simulation application.
   */
  deleteSimulationApplication(params: RoboMaker.Types.DeleteSimulationApplicationRequest, callback?: (err: AWSError, data: RoboMaker.Types.DeleteSimulationApplicationResponse) => void): Request<RoboMaker.Types.DeleteSimulationApplicationResponse, AWSError>;
  /**
   * Deletes a simulation application.
   */
  deleteSimulationApplication(callback?: (err: AWSError, data: RoboMaker.Types.DeleteSimulationApplicationResponse) => void): Request<RoboMaker.Types.DeleteSimulationApplicationResponse, AWSError>;
  /**
   * Deregisters a robot.
   */
  deregisterRobot(params: RoboMaker.Types.DeregisterRobotRequest, callback?: (err: AWSError, data: RoboMaker.Types.DeregisterRobotResponse) => void): Request<RoboMaker.Types.DeregisterRobotResponse, AWSError>;
  /**
   * Deregisters a robot.
   */
  deregisterRobot(callback?: (err: AWSError, data: RoboMaker.Types.DeregisterRobotResponse) => void): Request<RoboMaker.Types.DeregisterRobotResponse, AWSError>;
  /**
   * Describes a deployment job. [Does it work regardless of deployment status, e.g. Failed?]
   */
  describeDeploymentJob(params: RoboMaker.Types.DescribeDeploymentJobRequest, callback?: (err: AWSError, data: RoboMaker.Types.DescribeDeploymentJobResponse) => void): Request<RoboMaker.Types.DescribeDeploymentJobResponse, AWSError>;
  /**
   * Describes a deployment job. [Does it work regardless of deployment status, e.g. Failed?]
   */
  describeDeploymentJob(callback?: (err: AWSError, data: RoboMaker.Types.DescribeDeploymentJobResponse) => void): Request<RoboMaker.Types.DescribeDeploymentJobResponse, AWSError>;
  /**
   * Describes a fleet.
   */
  describeFleet(params: RoboMaker.Types.DescribeFleetRequest, callback?: (err: AWSError, data: RoboMaker.Types.DescribeFleetResponse) => void): Request<RoboMaker.Types.DescribeFleetResponse, AWSError>;
  /**
   * Describes a fleet.
   */
  describeFleet(callback?: (err: AWSError, data: RoboMaker.Types.DescribeFleetResponse) => void): Request<RoboMaker.Types.DescribeFleetResponse, AWSError>;
  /**
   * Describes a robot.
   */
  describeRobot(params: RoboMaker.Types.DescribeRobotRequest, callback?: (err: AWSError, data: RoboMaker.Types.DescribeRobotResponse) => void): Request<RoboMaker.Types.DescribeRobotResponse, AWSError>;
  /**
   * Describes a robot.
   */
  describeRobot(callback?: (err: AWSError, data: RoboMaker.Types.DescribeRobotResponse) => void): Request<RoboMaker.Types.DescribeRobotResponse, AWSError>;
  /**
   * Describes a robot application.
   */
  describeRobotApplication(params: RoboMaker.Types.DescribeRobotApplicationRequest, callback?: (err: AWSError, data: RoboMaker.Types.DescribeRobotApplicationResponse) => void): Request<RoboMaker.Types.DescribeRobotApplicationResponse, AWSError>;
  /**
   * Describes a robot application.
   */
  describeRobotApplication(callback?: (err: AWSError, data: RoboMaker.Types.DescribeRobotApplicationResponse) => void): Request<RoboMaker.Types.DescribeRobotApplicationResponse, AWSError>;
  /**
   * Describes a simulation application.
   */
  describeSimulationApplication(params: RoboMaker.Types.DescribeSimulationApplicationRequest, callback?: (err: AWSError, data: RoboMaker.Types.DescribeSimulationApplicationResponse) => void): Request<RoboMaker.Types.DescribeSimulationApplicationResponse, AWSError>;
  /**
   * Describes a simulation application.
   */
  describeSimulationApplication(callback?: (err: AWSError, data: RoboMaker.Types.DescribeSimulationApplicationResponse) => void): Request<RoboMaker.Types.DescribeSimulationApplicationResponse, AWSError>;
  /**
   * Describes a simulation job.
   */
  describeSimulationJob(params: RoboMaker.Types.DescribeSimulationJobRequest, callback?: (err: AWSError, data: RoboMaker.Types.DescribeSimulationJobResponse) => void): Request<RoboMaker.Types.DescribeSimulationJobResponse, AWSError>;
  /**
   * Describes a simulation job.
   */
  describeSimulationJob(callback?: (err: AWSError, data: RoboMaker.Types.DescribeSimulationJobResponse) => void): Request<RoboMaker.Types.DescribeSimulationJobResponse, AWSError>;
  /**
   * Returns a list of deployment jobs for a fleet. You can optionally provide filters to retrieve specific deployment jobs.
   */
  listDeploymentJobs(params: RoboMaker.Types.ListDeploymentJobsRequest, callback?: (err: AWSError, data: RoboMaker.Types.ListDeploymentJobsResponse) => void): Request<RoboMaker.Types.ListDeploymentJobsResponse, AWSError>;
  /**
   * Returns a list of deployment jobs for a fleet. You can optionally provide filters to retrieve specific deployment jobs.
   */
  listDeploymentJobs(callback?: (err: AWSError, data: RoboMaker.Types.ListDeploymentJobsResponse) => void): Request<RoboMaker.Types.ListDeploymentJobsResponse, AWSError>;
  /**
   * Returns a list of fleets. You can optionally provide filters to retrieve specific fleets.
   */
  listFleets(params: RoboMaker.Types.ListFleetsRequest, callback?: (err: AWSError, data: RoboMaker.Types.ListFleetsResponse) => void): Request<RoboMaker.Types.ListFleetsResponse, AWSError>;
  /**
   * Returns a list of fleets. You can optionally provide filters to retrieve specific fleets.
   */
  listFleets(callback?: (err: AWSError, data: RoboMaker.Types.ListFleetsResponse) => void): Request<RoboMaker.Types.ListFleetsResponse, AWSError>;
  /**
   * Returns a list of robot application. You can optionally provide filters to retrieve specific robot applications.
   */
  listRobotApplications(params: RoboMaker.Types.ListRobotApplicationsRequest, callback?: (err: AWSError, data: RoboMaker.Types.ListRobotApplicationsResponse) => void): Request<RoboMaker.Types.ListRobotApplicationsResponse, AWSError>;
  /**
   * Returns a list of robot application. You can optionally provide filters to retrieve specific robot applications.
   */
  listRobotApplications(callback?: (err: AWSError, data: RoboMaker.Types.ListRobotApplicationsResponse) => void): Request<RoboMaker.Types.ListRobotApplicationsResponse, AWSError>;
  /**
   * Returns a list of robots. You can optionally provide filters to retrieve specific robots.
   */
  listRobots(params: RoboMaker.Types.ListRobotsRequest, callback?: (err: AWSError, data: RoboMaker.Types.ListRobotsResponse) => void): Request<RoboMaker.Types.ListRobotsResponse, AWSError>;
  /**
   * Returns a list of robots. You can optionally provide filters to retrieve specific robots.
   */
  listRobots(callback?: (err: AWSError, data: RoboMaker.Types.ListRobotsResponse) => void): Request<RoboMaker.Types.ListRobotsResponse, AWSError>;
  /**
   * Returns a list of simulation applications. You can optionally provide filters to retrieve specific simulation applications.
   */
  listSimulationApplications(params: RoboMaker.Types.ListSimulationApplicationsRequest, callback?: (err: AWSError, data: RoboMaker.Types.ListSimulationApplicationsResponse) => void): Request<RoboMaker.Types.ListSimulationApplicationsResponse, AWSError>;
  /**
   * Returns a list of simulation applications. You can optionally provide filters to retrieve specific simulation applications.
   */
  listSimulationApplications(callback?: (err: AWSError, data: RoboMaker.Types.ListSimulationApplicationsResponse) => void): Request<RoboMaker.Types.ListSimulationApplicationsResponse, AWSError>;
  /**
   * Returns a list of simulation jobs. You can optionally provide filters to retrieve specific simulation jobs.
   */
  listSimulationJobs(params: RoboMaker.Types.ListSimulationJobsRequest, callback?: (err: AWSError, data: RoboMaker.Types.ListSimulationJobsResponse) => void): Request<RoboMaker.Types.ListSimulationJobsResponse, AWSError>;
  /**
   * Returns a list of simulation jobs. You can optionally provide filters to retrieve specific simulation jobs.
   */
  listSimulationJobs(callback?: (err: AWSError, data: RoboMaker.Types.ListSimulationJobsResponse) => void): Request<RoboMaker.Types.ListSimulationJobsResponse, AWSError>;
  /**
   * Registers a robot with a fleet.
   */
  registerRobot(params: RoboMaker.Types.RegisterRobotRequest, callback?: (err: AWSError, data: RoboMaker.Types.RegisterRobotResponse) => void): Request<RoboMaker.Types.RegisterRobotResponse, AWSError>;
  /**
   * Registers a robot with a fleet.
   */
  registerRobot(callback?: (err: AWSError, data: RoboMaker.Types.RegisterRobotResponse) => void): Request<RoboMaker.Types.RegisterRobotResponse, AWSError>;
  /**
   * Restarts a running simulation job.
   */
  restartSimulationJob(params: RoboMaker.Types.RestartSimulationJobRequest, callback?: (err: AWSError, data: RoboMaker.Types.RestartSimulationJobResponse) => void): Request<RoboMaker.Types.RestartSimulationJobResponse, AWSError>;
  /**
   * Restarts a running simulation job.
   */
  restartSimulationJob(callback?: (err: AWSError, data: RoboMaker.Types.RestartSimulationJobResponse) => void): Request<RoboMaker.Types.RestartSimulationJobResponse, AWSError>;
  /**
   * Syncrhonizes robots in a fleet to the latest deployment. This is helpful if robots were added after a deployment.
   */
  syncDeploymentJob(params: RoboMaker.Types.SyncDeploymentJobRequest, callback?: (err: AWSError, data: RoboMaker.Types.SyncDeploymentJobResponse) => void): Request<RoboMaker.Types.SyncDeploymentJobResponse, AWSError>;
  /**
   * Syncrhonizes robots in a fleet to the latest deployment. This is helpful if robots were added after a deployment.
   */
  syncDeploymentJob(callback?: (err: AWSError, data: RoboMaker.Types.SyncDeploymentJobResponse) => void): Request<RoboMaker.Types.SyncDeploymentJobResponse, AWSError>;
  /**
   * Updates a robot application.
   */
  updateRobotApplication(params: RoboMaker.Types.UpdateRobotApplicationRequest, callback?: (err: AWSError, data: RoboMaker.Types.UpdateRobotApplicationResponse) => void): Request<RoboMaker.Types.UpdateRobotApplicationResponse, AWSError>;
  /**
   * Updates a robot application.
   */
  updateRobotApplication(callback?: (err: AWSError, data: RoboMaker.Types.UpdateRobotApplicationResponse) => void): Request<RoboMaker.Types.UpdateRobotApplicationResponse, AWSError>;
  /**
   * Updates a simulation application.
   */
  updateSimulationApplication(params: RoboMaker.Types.UpdateSimulationApplicationRequest, callback?: (err: AWSError, data: RoboMaker.Types.UpdateSimulationApplicationResponse) => void): Request<RoboMaker.Types.UpdateSimulationApplicationResponse, AWSError>;
  /**
   * Updates a simulation application.
   */
  updateSimulationApplication(callback?: (err: AWSError, data: RoboMaker.Types.UpdateSimulationApplicationResponse) => void): Request<RoboMaker.Types.UpdateSimulationApplicationResponse, AWSError>;
}
declare namespace RoboMaker {
  export type Architecture = "X86_64"|"ARM64"|"ARMHF"|string;
  export type Arn = string;
  export type Arns = Arn[];
  export interface BatchDescribeSimulationJobRequest {
    /**
     * A list of Amazon Resource Names (ARNs) of simulation jobs to describe.
     */
    jobs: Arns;
  }
  export interface BatchDescribeSimulationJobResponse {
    /**
     * A list of simulation jobs.
     */
    jobs?: SimulationJobs;
    /**
     * A list of unprocessed simulation job Amazon Resource Names (ARNs).
     */
    unprocessedJobs?: Arns;
  }
  export type Boolean = boolean;
  export interface CancelSimulationJobRequest {
    /**
     * The simulation job ARN to cancel.
     */
    job: Arn;
  }
  export interface CancelSimulationJobResponse {
  }
  export type ClientRequestToken = string;
  export interface CreateDeploymentJobRequest {
    /**
     * The requested deployment configuration.
     */
    deploymentConfig?: DeploymentConfig;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken: ClientRequestToken;
    /**
     * The Amazon Resource Name (ARN) of the fleet to deploy.
     */
    fleet: Arn;
    /**
     * The deployment application configuration.
     */
    deploymentApplicationConfigs: DeploymentApplicationConfigs;
  }
  export interface CreateDeploymentJobResponse {
    /**
     * The Amazon Resource Name (ARN) of the deployment job.
     */
    arn?: Arn;
    /**
     * The target fleet for the deployment job.
     */
    fleet?: Arn;
    /**
     * The status of the deployment job.
     */
    status?: DeploymentStatus;
    /**
     * The deployment application configuration.
     */
    deploymentApplicationConfigs?: DeploymentApplicationConfigs;
    /**
     * The failure reason of the deployment job if it failed.
     */
    failureReason?: GenericString;
    /**
     * The failure code of the deployment job if it failed.
     */
    failureCode?: DeploymentJobErrorCode;
    /**
     * The time, in milliseconds since the epoch, when the fleet was created.
     */
    createdAt?: CreatedAt;
    /**
     * The deployment configuration.
     */
    deploymentConfig?: DeploymentConfig;
  }
  export interface CreateFleetRequest {
    /**
     * The name of the fleet.
     */
    name: Name;
  }
  export interface CreateFleetResponse {
    /**
     * The Amazon Resource Name (ARN) of the fleet.
     */
    arn?: Arn;
    /**
     * The name of the fleet.
     */
    name?: Name;
    /**
     * The time, in milliseconds since the epoch, when the fleet was created.
     */
    createdAt?: CreatedAt;
  }
  export interface CreateRobotApplicationRequest {
    /**
     * The name of the robot application.
     */
    name: Name;
    /**
     * The sources of the robot application.
     */
    sources: SourceConfigs;
    /**
     * The robot software suite used by the robot application.
     */
    robotSoftwareSuite: RobotSoftwareSuite;
  }
  export interface CreateRobotApplicationResponse {
    /**
     * The Amazon Resource Name (ARN) of the robot application.
     */
    arn?: Arn;
    /**
     * The name of the robot application.
     */
    name?: Name;
    /**
     * The version of the robot application.
     */
    version?: Version;
    /**
     * The sources of the robot application.
     */
    sources?: Sources;
    /**
     * The robot software suite used by the robot application.
     */
    robotSoftwareSuite?: RobotSoftwareSuite;
    /**
     * The time, in milliseconds since the epoch, when the robot application was last updated.
     */
    lastUpdatedAt?: LastUpdatedAt;
    /**
     * The revision id of the robot application.
     */
    revisionId?: RevisionId;
  }
  export interface CreateRobotApplicationVersionRequest {
    /**
     * The application information for the robot application.
     */
    application: Arn;
    /**
     * The current revision id for the robot application. If you provide a value and it matches the latest revision ID, a new version will be created.
     */
    currentRevisionId?: RevisionId;
  }
  export interface CreateRobotApplicationVersionResponse {
    /**
     * The Amazon Resource Name (ARN) of the robot application.
     */
    arn?: Arn;
    /**
     * The name of the robot application.
     */
    name?: Name;
    /**
     * The version of the robot application.
     */
    version?: Version;
    /**
     * The sources of the robot application.
     */
    sources?: Sources;
    /**
     * The robot software suite used by the robot application.
     */
    robotSoftwareSuite?: RobotSoftwareSuite;
    /**
     * The time, in milliseconds since the epoch, when the robot application was last updated.
     */
    lastUpdatedAt?: LastUpdatedAt;
    /**
     * The revision id of the robot application.
     */
    revisionId?: RevisionId;
  }
  export interface CreateRobotRequest {
    /**
     * The name for the robot.
     */
    name: Name;
    /**
     * The target architecture of the robot.
     */
    architecture: Architecture;
    /**
     * The Greengrass group id.
     */
    greengrassGroupId: Id;
  }
  export interface CreateRobotResponse {
    /**
     * The Amazon Resource Name (ARN) of the robot.
     */
    arn?: Arn;
    /**
     * The name of the robot.
     */
    name?: Name;
    /**
     * The time, in milliseconds since the epoch, when the robot was created.
     */
    createdAt?: CreatedAt;
    /**
     * The Amazon Resource Name (ARN) of the Greengrass group associated with the robot.
     */
    greengrassGroupId?: Id;
    /**
     * The target architecture of the robot.
     */
    architecture?: Architecture;
  }
  export interface CreateSimulationApplicationRequest {
    /**
     * The name of the simulation application.
     */
    name: Name;
    /**
     * The sources of the simulation application.
     */
    sources: SourceConfigs;
    /**
     * The simulation software suite used by the simulation application.
     */
    simulationSoftwareSuite: SimulationSoftwareSuite;
    /**
     * The robot software suite of the simulation application.
     */
    robotSoftwareSuite: RobotSoftwareSuite;
    /**
     * The rendering engine for the simulation application.
     */
    renderingEngine: RenderingEngine;
  }
  export interface CreateSimulationApplicationResponse {
    /**
     * The Amazon Resource Name (ARN) of the simulation application.
     */
    arn?: Arn;
    /**
     * The name of the simulation application.
     */
    name?: Name;
    /**
     * The version of the simulation application.
     */
    version?: Version;
    /**
     * The sources of the simulation application.
     */
    sources?: Sources;
    /**
     * The simulation software suite used by the simulation application.
     */
    simulationSoftwareSuite?: SimulationSoftwareSuite;
    /**
     * Information about the robot software suite.
     */
    robotSoftwareSuite?: RobotSoftwareSuite;
    /**
     * The rendering engine for the simulation application.
     */
    renderingEngine?: RenderingEngine;
    /**
     * The time, in milliseconds since the epoch, when the simulation application was last updated.
     */
    lastUpdatedAt?: LastUpdatedAt;
    /**
     * The revision id of the simulation application.
     */
    revisionId?: RevisionId;
  }
  export interface CreateSimulationApplicationVersionRequest {
    /**
     * The application information for the simulation application.
     */
    application: Arn;
    /**
     * The current revision id for the simulation application. If you provide a value and it matches the latest revision ID, a new version will be created.
     */
    currentRevisionId?: RevisionId;
  }
  export interface CreateSimulationApplicationVersionResponse {
    /**
     * The Amazon Resource Name (ARN) of the simulation application.
     */
    arn?: Arn;
    /**
     * The name of the simulation application.
     */
    name?: Name;
    /**
     * The version of the simulation application.
     */
    version?: Version;
    /**
     * The sources of the simulation application.
     */
    sources?: Sources;
    /**
     * The simulation software suite used by the simulation application.
     */
    simulationSoftwareSuite?: SimulationSoftwareSuite;
    /**
     * Information about the robot software suite.
     */
    robotSoftwareSuite?: RobotSoftwareSuite;
    /**
     * The rendering engine for the simulation application.
     */
    renderingEngine?: RenderingEngine;
    /**
     * The time, in milliseconds since the epoch, when the simulation application was last updated.
     */
    lastUpdatedAt?: LastUpdatedAt;
    /**
     * The revision ID of the simulation application.
     */
    revisionId?: RevisionId;
  }
  export interface CreateSimulationJobRequest {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: ClientRequestToken;
    /**
     * Location for output files generated by the simulation job.
     */
    outputLocation?: OutputLocation;
    /**
     * The maximum simulation job duration in seconds (up to 14 days or 1,209,600 seconds. When maxJobDurationInSeconds is reached, the simulation job will status will transition to Completed.
     */
    maxJobDurationInSeconds: JobDuration;
    /**
     * The IAM role that allows the simulation instance to call the AWS APIs that are specified in its associated policies on your behalf. This is how credentials are passed in to your simulation job. See how to specify AWS security credentials for your application. 
     */
    iamRole: IamRole;
    /**
     * The failure behavior the simulation job.  Continue  Restart the simulation job in the same host instance.  Fail  Stop the simulation job and terminate the instance.  
     */
    failureBehavior?: FailureBehavior;
    /**
     * The robot application to use in the simulation job.
     */
    robotApplications?: RobotApplicationConfigs;
    /**
     * The simulation application to use in the simulation job.
     */
    simulationApplications?: SimulationApplicationConfigs;
    /**
     * If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and one subnet ID. 
     */
    vpcConfig?: VPCConfig;
  }
  export interface CreateSimulationJobResponse {
    /**
     * The Amazon Resource Name (ARN) of the simulation job.
     */
    arn?: Arn;
    /**
     * The status of the simulation job.
     */
    status?: SimulationJobStatus;
    /**
     * The time, in milliseconds since the epoch, when the simulation job was last updated.
     */
    lastUpdatedAt?: LastUpdatedAt;
    /**
     * the failure behavior for the simulation job.
     */
    failureBehavior?: FailureBehavior;
    /**
     * The failure code of the simulation job if it failed.
     */
    failureCode?: SimulationJobErrorCode;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: ClientRequestToken;
    /**
     * Simulation job output files location.
     */
    outputLocation?: OutputLocation;
    /**
     * The maximum simulation job duration in seconds. The value must be 8 days (691,200 seconds) or less. 
     */
    maxJobDurationInSeconds?: JobDuration;
    /**
     * The simulation job execution duration in milliseconds.
     */
    simulationTimeMillis?: SimulationTimeMillis;
    /**
     * The IAM role that allows the simulation job to call the AWS APIs that are specified in its associated policies on your behalf.
     */
    iamRole?: IamRole;
    /**
     * The robot application used by the simulation job.
     */
    robotApplications?: RobotApplicationConfigs;
    /**
     * The simulation application used by the simulation job.
     */
    simulationApplications?: SimulationApplicationConfigs;
    /**
     * Information about the vpc configuration.
     */
    vpcConfig?: VPCConfigResponse;
  }
  export type CreatedAt = Date;
  export interface DeleteFleetRequest {
    /**
     * The Amazon Resource Name (ARN) of the fleet.
     */
    fleet: Arn;
  }
  export interface DeleteFleetResponse {
  }
  export interface DeleteRobotApplicationRequest {
    /**
     * The Amazon Resource Name (ARN) of the the robot application.
     */
    application: Arn;
    /**
     * The version of the robot application to delete.
     */
    applicationVersion?: Version;
  }
  export interface DeleteRobotApplicationResponse {
  }
  export interface DeleteRobotRequest {
    /**
     * The Amazon Resource Name (ARN) of the robot.
     */
    robot: Arn;
  }
  export interface DeleteRobotResponse {
  }
  export interface DeleteSimulationApplicationRequest {
    /**
     * The application information for the simulation application to delete.
     */
    application: Arn;
    /**
     * The version of the simulation application to delete.
     */
    applicationVersion?: Version;
  }
  export interface DeleteSimulationApplicationResponse {
  }
  export interface DeploymentApplicationConfig {
    /**
     * The application.
     */
    application: Arn;
    /**
     * The version of the application.
     */
    applicationVersion: Version;
    /**
     * The launch configuration, usually roslaunch.
     */
    launchConfig: DeploymentLaunchConfig;
  }
  export type DeploymentApplicationConfigs = DeploymentApplicationConfig[];
  export interface DeploymentConfig {
    /**
     * The percentage of robots receiving the deployment at the same time.
     */
    concurrentDeploymentPercentage?: Percentage;
    /**
     * The percentage of deployments that need to fail before stopping deployment.
     */
    failureThresholdPercentage?: Percentage;
  }
  export interface DeploymentJob {
    /**
     * The Amazon Resource Name (ARN) of the deployment job.
     */
    arn?: Arn;
    /**
     * The Amazon Resource Name (ARN) of the fleet.
     */
    fleet?: Arn;
    /**
     * The status of the deployment job.
     */
    status?: DeploymentStatus;
    /**
     * The deployment application configuration.
     */
    deploymentApplicationConfigs?: DeploymentApplicationConfigs;
    /**
     * The deployment configuration.
     */
    deploymentConfig?: DeploymentConfig;
    /**
     * A short description of the reason why the deployment job failed.
     */
    failureReason?: GenericString;
    /**
     * The deployment job failure code.
     */
    failureCode?: DeploymentJobErrorCode;
    /**
     * The time, in milliseconds since the epoch, when the deployment job was created.
     */
    createdAt?: CreatedAt;
  }
  export type DeploymentJobErrorCode = "ResourceNotFound"|"FailureThresholdBreached"|"RobotDeploymentNoResponse"|"GreengrassDeploymentFailed"|"MissingRobotArchitecture"|"MissingRobotApplicationArchitecture"|"MissingRobotDeploymentResource"|"GreengrassGroupVersionDoesNotExist"|"ExtractingBundleFailure"|"PreLaunchFileFailure"|"PostLaunchFileFailure"|"BadPermissionError"|"InternalServerError"|string;
  export type DeploymentJobs = DeploymentJob[];
  export interface DeploymentLaunchConfig {
    /**
     * The package name.
     */
    packageName: GenericString;
    /**
     * The deployment pre-launch file. This file will be executed prior to the deployment launch file.
     */
    preLaunchFile?: GenericString;
    /**
     * The deployment launch file.
     */
    launchFile: GenericString;
    /**
     * The deployment post-launch file. This file will be executed after the deployment launch file.
     */
    postLaunchFile?: GenericString;
    /**
     * An array of key/value pairs specifying environment variables for the deployment application.
     */
    environmentVariables?: EnvironmentVariableMap;
  }
  export type DeploymentStatus = "Pending"|"Preparing"|"InProgress"|"Failed"|"Succeeded"|string;
  export interface DeregisterRobotRequest {
    /**
     * The Amazon Resource Name (ARN) of the fleet.
     */
    fleet: Arn;
    /**
     * The Amazon Resource Name (ARN) of the robot.
     */
    robot: Arn;
  }
  export interface DeregisterRobotResponse {
    /**
     * The Amazon Resource Name (ARN) of the fleet.
     */
    fleet?: Arn;
    /**
     * The Amazon Resource Name (ARN) of the robot.
     */
    robot?: Arn;
  }
  export interface DescribeDeploymentJobRequest {
    /**
     * The Amazon Resource Name (ARN) of the deployment job.
     */
    job: Arn;
  }
  export interface DescribeDeploymentJobResponse {
    /**
     * The Amazon Resource Name (ARN) of the deployment job.
     */
    arn?: Arn;
    /**
     * The Amazon Resource Name (ARN) of the fleet.
     */
    fleet?: Arn;
    /**
     * The status of the deployment job.
     */
    status?: DeploymentStatus;
    /**
     * The deployment configuration.
     */
    deploymentConfig?: DeploymentConfig;
    /**
     * The deployment application configuration.
     */
    deploymentApplicationConfigs?: DeploymentApplicationConfigs;
    /**
     * A short description of the reason why the deployment job failed.
     */
    failureReason?: GenericString;
    /**
     * The deployment job failure code.
     */
    failureCode?: DeploymentJobErrorCode;
    /**
     * The time, in milliseconds since the epoch, when the deployment job was created.
     */
    createdAt?: CreatedAt;
    /**
     * A list of robot deployment summaries.
     */
    robotDeploymentSummary?: RobotDeploymentSummary;
  }
  export interface DescribeFleetRequest {
    /**
     * The Amazon Resource Name (ARN) of the fleet.
     */
    fleet: Arn;
  }
  export interface DescribeFleetResponse {
    /**
     * The name of the fleet.
     */
    name?: Name;
    /**
     * The Amazon Resource Name (ARN) of the fleet.
     */
    arn?: Arn;
    /**
     * A list of robots.
     */
    robots?: Robots;
    /**
     * The time, in milliseconds since the epoch, when the fleet was created.
     */
    createdAt?: CreatedAt;
    /**
     * The status of the last deployment.
     */
    lastDeploymentStatus?: DeploymentStatus;
    /**
     * The Amazon Resource Name (ARN) of the last deployment job.
     */
    lastDeploymentJob?: Arn;
    /**
     * The time of the last deployment.
     */
    lastDeploymentTime?: CreatedAt;
  }
  export interface DescribeRobotApplicationRequest {
    /**
     * The Amazon Resource Name (ARN) of the robot application.
     */
    application: Arn;
    /**
     * The version of the robot application to describe.
     */
    applicationVersion?: Version;
  }
  export interface DescribeRobotApplicationResponse {
    /**
     * The Amazon Resource Name (ARN) of the robot application.
     */
    arn?: Arn;
    /**
     * The name of the robot application.
     */
    name?: Name;
    /**
     * The version of the robot application.
     */
    version?: Version;
    /**
     * The sources of the robot application.
     */
    sources?: Sources;
    /**
     * The robot software suite used by the robot application.
     */
    robotSoftwareSuite?: RobotSoftwareSuite;
    /**
     * The revision id of the robot application.
     */
    revisionId?: RevisionId;
    /**
     * The time, in milliseconds since the epoch, when the robot application was last updated.
     */
    lastUpdatedAt?: LastUpdatedAt;
  }
  export interface DescribeRobotRequest {
    /**
     * The Amazon Resource Name (ARN) of the robot to be described.
     */
    robot: Arn;
  }
  export interface DescribeRobotResponse {
    /**
     * The Amazon Resource Name (ARN) of the robot.
     */
    arn?: Arn;
    /**
     * The name of the robot.
     */
    name?: Name;
    /**
     * The Amazon Resource Name (ARN) of the fleet.
     */
    fleetArn?: Arn;
    /**
     * The status of the fleet.
     */
    status?: RobotStatus;
    /**
     * The Greengrass group id.
     */
    greengrassGroupId?: Id;
    /**
     * The time, in milliseconds since the epoch, when the robot was created.
     */
    createdAt?: CreatedAt;
    /**
     * The target architecture of the robot application.
     */
    architecture?: Architecture;
    /**
     * The Amazon Resource Name (ARN) of the last deployment job.
     */
    lastDeploymentJob?: Arn;
    /**
     * The time of the last deployment job.
     */
    lastDeploymentTime?: CreatedAt;
  }
  export interface DescribeSimulationApplicationRequest {
    /**
     * The application information for the simulation application.
     */
    application: Arn;
    /**
     * The version of the simulation application to describe.
     */
    applicationVersion?: Version;
  }
  export interface DescribeSimulationApplicationResponse {
    /**
     * The Amazon Resource Name (ARN) of the robot simulation application.
     */
    arn?: Arn;
    /**
     * The name of the simulation application.
     */
    name?: Name;
    /**
     * The version of the simulation application.
     */
    version?: Version;
    /**
     * The sources of the simulation application.
     */
    sources?: Sources;
    /**
     * The simulation software suite used by the simulation application.
     */
    simulationSoftwareSuite?: SimulationSoftwareSuite;
    /**
     * Information about the robot software suite.
     */
    robotSoftwareSuite?: RobotSoftwareSuite;
    /**
     * The rendering engine for the simulation application.
     */
    renderingEngine?: RenderingEngine;
    /**
     * The revision id of the simulation application.
     */
    revisionId?: RevisionId;
    /**
     * The time, in milliseconds since the epoch, when the simulation application was last updated.
     */
    lastUpdatedAt?: LastUpdatedAt;
  }
  export interface DescribeSimulationJobRequest {
    /**
     * The Amazon Resource Name (ARN) of the simulation job to be described.
     */
    job: Arn;
  }
  export interface DescribeSimulationJobResponse {
    /**
     * The Amazon Resource Name (ARN) of the simulation job.
     */
    arn?: Arn;
    /**
     * The name of the simulation job.
     */
    name?: Name;
    /**
     * The status of the simulation job.
     */
    status?: SimulationJobStatus;
    /**
     * The time, in milliseconds since the epoch, when the simulation job was last updated.
     */
    lastUpdatedAt?: LastUpdatedAt;
    /**
     * The failure behavior for the simulation job.
     */
    failureBehavior?: FailureBehavior;
    /**
     * The failure code of the simulation job if it failed:  InternalServiceError  Internal service error  RobotApplicationCrash  Robot application exited abnormally (segfault, etc.)  SimulationApplicationCrash   Simulation application exited abnormally (segfault, etc.)  BadPermissionsRobotApplication  Robot application bundle could not be downloaded  BadPermissionsSimulationApplication  Simulation application bundle could not be downloaded  BadPermissionsS3Output  Unable to publish outputs to customer-provided S3 bucket  BadPermissionsCloudwatchLogs  Unable to publish logs to customer-provided CloudWatch Logs resource  SubnetIpLimitExceeded  Subnet IP limit exceeded  ENILimitExceeded  ENI limit exceeded  BadPermissionsUserCredentials  Unable to use the Role provided  InvalidBundleRobotApplication  Robot bundle cannot be extracted (invalid format, bundling error, etc.)  InvalidBundleSimulationApplication  Simulation bundle cannot be extracted (invalid format, bundling error, etc.)  RobotApplicationVersionMismatchedEtag  Etag for RobotApplication does not match value during version creation  SimulationApplicationVersionMismatchedEtag  Etag for SimulationApplication does not match value during version creation  
     */
    failureCode?: SimulationJobErrorCode;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: ClientRequestToken;
    /**
     * Location for output files generated by the simulation job.
     */
    outputLocation?: OutputLocation;
    /**
     * The maximum job duration in seconds. The value must be 8 days (691,200 seconds) or less.
     */
    maxJobDurationInSeconds?: JobDuration;
    /**
     * The simulation job execution duration in milliseconds.
     */
    simulationTimeMillis?: SimulationTimeMillis;
    /**
     * The IAM role that allows the simulation instance to call the AWS APIs that are specified in its associated policies on your behalf.
     */
    iamRole?: IamRole;
    /**
     * A list of robot applications.
     */
    robotApplications?: RobotApplicationConfigs;
    /**
     * A list of simulation applications.
     */
    simulationApplications?: SimulationApplicationConfigs;
    /**
     * The VPC configuration.
     */
    vpcConfig?: VPCConfigResponse;
  }
  export type EnvironmentVariableKey = string;
  export type EnvironmentVariableMap = {[key: string]: EnvironmentVariableValue};
  export type EnvironmentVariableValue = string;
  export type FailureBehavior = "Fail"|"Continue"|string;
  export interface Filter {
    /**
     * The name of the filter.
     */
    name?: Name;
    /**
     * A list of values.
     */
    values?: FilterValues;
  }
  export type FilterValues = Name[];
  export type Filters = Filter[];
  export interface Fleet {
    /**
     * The name of the fleet.
     */
    name?: Name;
    /**
     * The Amazon Resource Name (ARN) of the fleet.
     */
    arn?: Arn;
    /**
     * The time, in milliseconds since the epoch, when the fleet was created.
     */
    createdAt?: CreatedAt;
    /**
     * The status of the last fleet deployment.
     */
    lastDeploymentStatus?: DeploymentStatus;
    /**
     * The Amazon Resource Name (ARN) of the last deployment job.
     */
    lastDeploymentJob?: Arn;
    /**
     * The time of the last deployment.
     */
    lastDeploymentTime?: CreatedAt;
  }
  export type Fleets = Fleet[];
  export type GenericString = string;
  export type IamRole = string;
  export type Id = string;
  export type JobDuration = number;
  export type LastUpdatedAt = Date;
  export interface LaunchConfig {
    /**
     * The package name.
     */
    packageName: GenericString;
    /**
     * The launch file.
     */
    launchFile: GenericString;
    /**
     * The environment variables for the application launch.
     */
    environmentVariables?: EnvironmentVariableMap;
  }
  export interface ListDeploymentJobsRequest {
    /**
     * Optional filters to limit results.
     */
    filters?: Filters;
    /**
     * The nextToken value returned from a previous paginated ListDeploymentJobs request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.   This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of deployment job results returned by ListDeploymentJobs in paginated output. When this parameter is used, ListDeploymentJobs only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListDeploymentJobs request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then ListDeploymentJobs returns up to 100 results and a nextToken value if applicable. 
     */
    maxResults?: MaxResults;
  }
  export interface ListDeploymentJobsResponse {
    /**
     * A list of deployment jobs that meet the criteria of the request.
     */
    deploymentJobs?: DeploymentJobs;
    /**
     * The nextToken value to include in a future ListDeploymentJobs request. When the results of a ListDeploymentJobs request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return. 
     */
    nextToken?: PaginationToken;
  }
  export interface ListFleetsRequest {
    /**
     * The nextToken value returned from a previous paginated ListFleets request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.   This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of deployment job results returned by ListFleets in paginated output. When this parameter is used, ListFleets only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListFleets request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then ListFleets returns up to 100 results and a nextToken value if applicable. 
     */
    maxResults?: MaxResults;
    /**
     * Optional filters to limit results.
     */
    filters?: Filters;
  }
  export interface ListFleetsResponse {
    /**
     * A list of fleet details meeting the request criteria.
     */
    fleetDetails?: Fleets;
    /**
     * The nextToken value to include in a future ListDeploymentJobs request. When the results of a ListFleets request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return. 
     */
    nextToken?: PaginationToken;
  }
  export interface ListRobotApplicationsRequest {
    /**
     * The version qualifier of the robot application.
     */
    versionQualifier?: VersionQualifier;
    /**
     * The nextToken value returned from a previous paginated ListRobotApplications request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.   This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of deployment job results returned by ListRobotApplications in paginated output. When this parameter is used, ListRobotApplications only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListFleets request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then ListRobotApplications returns up to 100 results and a nextToken value if applicable. 
     */
    maxResults?: MaxResults;
    /**
     * Optional filters to limit results.
     */
    filters?: Filters;
  }
  export interface ListRobotApplicationsResponse {
    /**
     * A list of robot application summaries that meet the criteria of the request.
     */
    robotApplicationSummaries?: RobotApplicationSummaries;
    /**
     * The nextToken value to include in a future ListRobotApplications request. When the results of a ListRobotApplications request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return. 
     */
    nextToken?: PaginationToken;
  }
  export interface ListRobotsRequest {
    /**
     * The nextToken value returned from a previous paginated ListRobots request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.   This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of deployment job results returned by ListRobots in paginated output. When this parameter is used, ListRobots only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListFleets request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then ListRobots returns up to 100 results and a nextToken value if applicable. 
     */
    maxResults?: MaxResults;
    /**
     * Optional filters to limit results.
     */
    filters?: Filters;
  }
  export interface ListRobotsResponse {
    /**
     * A list of robots that meet the criteria of the request.
     */
    robots?: Robots;
    /**
     * The nextToken value to include in a future ListRobots request. When the results of a ListRobot request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return. 
     */
    nextToken?: PaginationToken;
  }
  export interface ListSimulationApplicationsRequest {
    /**
     * The version qualifier of the simulation application.
     */
    versionQualifier?: VersionQualifier;
    /**
     * The nextToken value returned from a previous paginated ListSimulationApplications request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.   This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of deployment job results returned by ListSimulationApplications in paginated output. When this parameter is used, ListSimulationApplications only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListFleets request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then ListSimulationApplications returns up to 100 results and a nextToken value if applicable. 
     */
    maxResults?: MaxResults;
    /**
     * Optional list of filters to limit results. The only valid filter name is name.
     */
    filters?: Filters;
  }
  export interface ListSimulationApplicationsResponse {
    /**
     * A list of simulation application summaries that meet the criteria of the request.
     */
    simulationApplicationSummaries?: SimulationApplicationSummaries;
    /**
     * The nextToken value to include in a future ListSimulationApplications request. When the results of a ListRobot request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return. 
     */
    nextToken?: PaginationToken;
  }
  export interface ListSimulationJobsRequest {
    /**
     * The nextToken value returned from a previous paginated ListSimulationJobs request where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value.   This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes. 
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of deployment job results returned by ListSimulationJobs in paginated output. When this parameter is used, ListSimulationJobs only returns maxResults results in a single page along with a nextToken response element. The remaining results of the initial request can be seen by sending another ListFleets request with the returned nextToken value. This value can be between 1 and 100. If this parameter is not used, then ListSimulationJobs returns up to 100 results and a nextToken value if applicable. 
     */
    maxResults?: MaxResults;
    /**
     * Optional filters to limit results.
     */
    filters?: Filters;
  }
  export interface ListSimulationJobsResponse {
    /**
     * A list of simulation job summaries that meet the criteria of the request.
     */
    simulationJobSummaries: SimulationJobSummaries;
    /**
     * The nextToken value to include in a future ListSimulationJobs request. When the results of a ListRobot request exceed maxResults, this value can be used to retrieve the next page of results. This value is null when there are no more results to return. 
     */
    nextToken?: PaginationToken;
  }
  export type MaxResults = number;
  export type Name = string;
  export interface OutputLocation {
    /**
     * The S3 bucket for output.
     */
    s3Bucket?: S3Bucket;
    /**
     * The S3 folder in the s3Bucket where output files will be placed.
     */
    s3Prefix?: S3Key;
  }
  export type PaginationToken = string;
  export type Percentage = number;
  export interface ProgressDetail {
    /**
     * The current progress status.
     */
    currentProgress?: GenericString;
    /**
     * The Amazon Resource Name (ARN) of the deployment job.
     */
    targetResource?: GenericString;
  }
  export interface RegisterRobotRequest {
    /**
     * The Amazon Resource Name (ARN) of the fleet.
     */
    fleet: Arn;
    /**
     * The Amazon Resource Name (ARN) of the robot.
     */
    robot: Arn;
  }
  export interface RegisterRobotResponse {
    /**
     * The Amazon Resource Name (ARN) of the fleet that the robot will join.
     */
    fleet?: Arn;
    /**
     * Information about the robot registration.
     */
    robot?: Arn;
  }
  export interface RenderingEngine {
    /**
     * The name of the rendering engine.
     */
    name?: RenderingEngineType;
    /**
     * The version of the rendering engine.
     */
    version?: RenderingEngineVersionType;
  }
  export type RenderingEngineType = "OGRE"|string;
  export type RenderingEngineVersionType = string;
  export interface RestartSimulationJobRequest {
    /**
     * The Amazon Resource Name (ARN) of the simulation job.
     */
    job: Arn;
  }
  export interface RestartSimulationJobResponse {
  }
  export type RevisionId = string;
  export interface Robot {
    /**
     * The Amazon Resource Name (ARN) of the robot.
     */
    arn?: Arn;
    /**
     * The name of the robot.
     */
    name?: Name;
    /**
     * The Amazon Resource Name (ARN) of the fleet.
     */
    fleetArn?: Arn;
    /**
     * The status of the robot.
     */
    status?: RobotStatus;
    /**
     * The Greengrass group associated with the robot.
     */
    greenGrassGroupId?: Id;
    /**
     * The time, in milliseconds since the epoch, when the robot was created.
     */
    createdAt?: CreatedAt;
    /**
     * The architecture of the robot.
     */
    architecture?: Architecture;
    /**
     * The Amazon Resource Name (ARN) of the last deployment job.
     */
    lastDeploymentJob?: Arn;
    /**
     * The time of the last deployment.
     */
    lastDeploymentTime?: CreatedAt;
  }
  export interface RobotApplicationConfig {
    /**
     * The application information for the robot application.
     */
    application: Arn;
    /**
     * The version of the robot application.
     */
    applicationVersion?: Version;
    /**
     * The launch configuration for the robot application.
     */
    launchConfig: LaunchConfig;
  }
  export type RobotApplicationConfigs = RobotApplicationConfig[];
  export type RobotApplicationNames = Name[];
  export type RobotApplicationSummaries = RobotApplicationSummary[];
  export interface RobotApplicationSummary {
    /**
     * The name of the robot application.
     */
    name?: Name;
    /**
     * The Amazon Resource Name (ARN) of the robot.
     */
    arn?: Arn;
    /**
     * The version of the robot application.
     */
    version?: Version;
    /**
     * The time, in milliseconds since the epoch, when the robot application was last updated.
     */
    lastUpdatedAt?: LastUpdatedAt;
  }
  export interface RobotDeployment {
    /**
     * The robot deployment Amazon Resource Name (ARN).
     */
    arn?: Arn;
    /**
     * The time, in milliseconds since the epoch, when the deployment was started.
     */
    deploymentStartTime?: CreatedAt;
    /**
     * The time, in milliseconds since the epoch, when the deployment finished.
     */
    deploymentFinishTime?: CreatedAt;
    /**
     * The status of the robot deployment.
     */
    status?: RobotStatus;
    /**
     * Information about how the deployment is progressing.
     */
    progressDetail?: ProgressDetail;
    /**
     * A short description of the reason why the robot deployment failed.
     */
    failureReason?: GenericString;
    /**
     * The robot deployment failure code.
     */
    failureCode?: DeploymentJobErrorCode;
  }
  export type RobotDeploymentSummary = RobotDeployment[];
  export interface RobotSoftwareSuite {
    /**
     * The name of the robot software suite.
     */
    name?: RobotSoftwareSuiteType;
    /**
     * The version of the robot software suite.
     */
    version?: RobotSoftwareSuiteVersionType;
  }
  export type RobotSoftwareSuiteType = "ROS"|string;
  export type RobotSoftwareSuiteVersionType = "Kinetic"|string;
  export type RobotStatus = "Available"|"Registered"|"PendingNewDeployment"|"Deploying"|"Failed"|"InSync"|"NoResponse"|string;
  export type Robots = Robot[];
  export type S3Bucket = string;
  export type S3Etag = string;
  export type S3Key = string;
  export type SecurityGroups = GenericString[];
  export interface SimulationApplicationConfig {
    /**
     * The application information for the simulation application.
     */
    application: Arn;
    /**
     * The version of the simulation application.
     */
    applicationVersion?: Version;
    /**
     * The launch configuration for the simulation application.
     */
    launchConfig: LaunchConfig;
  }
  export type SimulationApplicationConfigs = SimulationApplicationConfig[];
  export type SimulationApplicationNames = Name[];
  export type SimulationApplicationSummaries = SimulationApplicationSummary[];
  export interface SimulationApplicationSummary {
    /**
     * The name of the simulation application.
     */
    name?: Name;
    /**
     * The Amazon Resource Name (ARN) of the simulation application.
     */
    arn?: Arn;
    /**
     * The version of the simulation application.
     */
    version?: Version;
    /**
     * The time, in milliseconds since the epoch, when the simulation application was last updated.
     */
    lastUpdatedAt?: LastUpdatedAt;
  }
  export interface SimulationJob {
    /**
     * The Amazon Resource Name (ARN) of the simulation job.
     */
    arn?: Arn;
    /**
     * The name of the simulation job.
     */
    name?: Name;
    /**
     * Status of the simulation job.
     */
    status?: SimulationJobStatus;
    /**
     * The time, in milliseconds since the epoch, when the simulation job was last updated.
     */
    lastUpdatedAt?: LastUpdatedAt;
    /**
     * The failure behavior the simulation job.  Continue  Restart the simulation job in the same host instance.  Fail  Stop the simulation job and terminate the instance.  
     */
    failureBehavior?: FailureBehavior;
    /**
     * The failure code of the simulation job if it failed.
     */
    failureCode?: SimulationJobErrorCode;
    /**
     * A unique identifier for this SimulationJob request.
     */
    clientRequestToken?: ClientRequestToken;
    /**
     * Location for output files generated by the simulation job.
     */
    outputLocation?: OutputLocation;
    /**
     * The maximum simulation job duration in seconds. The value must be 8 days (691,200 seconds) or less.
     */
    maxJobDurationInSeconds?: JobDuration;
    /**
     * The simulation job execution duration in milliseconds.
     */
    simulationTimeMillis?: SimulationTimeMillis;
    /**
     * The IAM role that allows the simulation instance to call the AWS APIs that are specified in its associated policies on your behalf. This is how credentials are passed in to your simulation job. See how to specify AWS security credentials for your application. 
     */
    iamRole?: IamRole;
    /**
     * A list of robot applications.
     */
    robotApplications?: RobotApplicationConfigs;
    /**
     * A list of simulation applications.
     */
    simulationApplications?: SimulationApplicationConfigs;
    /**
     * VPC configuration information.
     */
    vpcConfig?: VPCConfigResponse;
  }
  export type SimulationJobErrorCode = "InternalServiceError"|"RobotApplicationCrash"|"SimulationApplicationCrash"|"BadPermissionsRobotApplication"|"BadPermissionsSimulationApplication"|"BadPermissionsS3Output"|"BadPermissionsCloudwatchLogs"|"SubnetIpLimitExceeded"|"ENILimitExceeded"|"BadPermissionsUserCredentials"|"InvalidBundleRobotApplication"|"InvalidBundleSimulationApplication"|"RobotApplicationVersionMismatchedEtag"|"SimulationApplicationVersionMismatchedEtag"|string;
  export type SimulationJobStatus = "Pending"|"Preparing"|"Running"|"Restarting"|"Completed"|"Failed"|"RunningFailed"|"Terminating"|"Terminated"|"Canceled"|string;
  export type SimulationJobSummaries = SimulationJobSummary[];
  export interface SimulationJobSummary {
    /**
     * The Amazon Resource Name (ARN) of the simulation job.
     */
    arn?: Arn;
    /**
     * The time, in milliseconds since the epoch, when the simulation job was last updated.
     */
    lastUpdatedAt?: LastUpdatedAt;
    /**
     * The name of the simulation job.
     */
    name?: Name;
    /**
     * The status of the simulation job.
     */
    status?: SimulationJobStatus;
    /**
     * A list of simulation job simulation application names.
     */
    simulationApplicationNames?: SimulationApplicationNames;
    /**
     * A list of simulation job robot application names.
     */
    robotApplicationNames?: RobotApplicationNames;
  }
  export type SimulationJobs = SimulationJob[];
  export interface SimulationSoftwareSuite {
    /**
     * The name of the simulation software suite.
     */
    name?: SimulationSoftwareSuiteType;
    /**
     * The version of the simulation software suite.
     */
    version?: SimulationSoftwareSuiteVersionType;
  }
  export type SimulationSoftwareSuiteType = "Gazebo"|string;
  export type SimulationSoftwareSuiteVersionType = string;
  export type SimulationTimeMillis = number;
  export interface Source {
    /**
     * The s3 bucket name.
     */
    s3Bucket?: S3Bucket;
    /**
     * The s3 object key.
     */
    s3Key?: S3Key;
    /**
     * A hash of the object specified by s3Bucket and s3Key.
     */
    etag?: S3Etag;
    /**
     * The taget processor architecture for the application.
     */
    architecture?: Architecture;
  }
  export interface SourceConfig {
    /**
     * The Amazon S3 bucket name.
     */
    s3Bucket?: S3Bucket;
    /**
     * The s3 object key.
     */
    s3Key?: S3Key;
    /**
     * The target processor architecture for the application.
     */
    architecture?: Architecture;
  }
  export type SourceConfigs = SourceConfig[];
  export type Sources = Source[];
  export type Subnets = GenericString[];
  export interface SyncDeploymentJobRequest {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken: ClientRequestToken;
    /**
     * The target fleet for the synchronization.
     */
    fleet: Arn;
  }
  export interface SyncDeploymentJobResponse {
    /**
     * The Amazon Resource Name (ARN) of the synchronization request.
     */
    arn?: Arn;
    /**
     * The Amazon Resource Name (ARN) of the fleet.
     */
    fleet?: Arn;
    /**
     * The status of the synchronization job.
     */
    status?: DeploymentStatus;
    /**
     * Information about the deployment configuration.
     */
    deploymentConfig?: DeploymentConfig;
    /**
     * Information about the deployment application configurations.
     */
    deploymentApplicationConfigs?: DeploymentApplicationConfigs;
    /**
     * The failure reason if the job fails.
     */
    failureReason?: GenericString;
    /**
     * The failure code if the job fails.
     */
    failureCode?: DeploymentJobErrorCode;
    /**
     * The time, in milliseconds since the epoch, when the fleet was created.
     */
    createdAt?: CreatedAt;
  }
  export interface UpdateRobotApplicationRequest {
    /**
     * The application information for the robot application.
     */
    application: Arn;
    /**
     * The sources of the robot application.
     */
    sources: SourceConfigs;
    /**
     * The robot software suite used by the robot application.
     */
    robotSoftwareSuite: RobotSoftwareSuite;
    /**
     * The revision id for the robot application.
     */
    currentRevisionId?: RevisionId;
  }
  export interface UpdateRobotApplicationResponse {
    /**
     * The Amazon Resource Name (ARN) of the updated robot application.
     */
    arn?: Arn;
    /**
     * The name of the robot application.
     */
    name?: Name;
    /**
     * The version of the robot application.
     */
    version?: Version;
    /**
     * The sources of the robot application.
     */
    sources?: Sources;
    /**
     * The robot software suite used by the robot application.
     */
    robotSoftwareSuite?: RobotSoftwareSuite;
    /**
     * The time, in milliseconds since the epoch, when the robot application was last updated.
     */
    lastUpdatedAt?: LastUpdatedAt;
    /**
     * The revision id of the robot application.
     */
    revisionId?: RevisionId;
  }
  export interface UpdateSimulationApplicationRequest {
    /**
     * The application information for the simulation application.
     */
    application: Arn;
    /**
     * The sources of the simulation application.
     */
    sources: SourceConfigs;
    /**
     * The simulation software suite used by the simulation application.
     */
    simulationSoftwareSuite: SimulationSoftwareSuite;
    /**
     * Information about the robot software suite.
     */
    robotSoftwareSuite: RobotSoftwareSuite;
    /**
     * The rendering engine for the simulation application.
     */
    renderingEngine: RenderingEngine;
    /**
     * The revision id for the robot application.
     */
    currentRevisionId?: RevisionId;
  }
  export interface UpdateSimulationApplicationResponse {
    /**
     * The Amazon Resource Name (ARN) of the updated simulation application.
     */
    arn?: Arn;
    /**
     * The name of the simulation application.
     */
    name?: Name;
    /**
     * The version of the robot application.
     */
    version?: Version;
    /**
     * The sources of the simulation application.
     */
    sources?: Sources;
    /**
     * The simulation software suite used by the simulation application.
     */
    simulationSoftwareSuite?: SimulationSoftwareSuite;
    /**
     * Information about the robot software suite.
     */
    robotSoftwareSuite?: RobotSoftwareSuite;
    /**
     * The rendering engine for the simulation application.
     */
    renderingEngine?: RenderingEngine;
    /**
     * The time, in milliseconds since the epoch, when the simulation application was last updated.
     */
    lastUpdatedAt?: LastUpdatedAt;
    /**
     * The revision id of the simulation application.
     */
    revisionId?: RevisionId;
  }
  export interface VPCConfig {
    /**
     * A list of one or more subnet IDs in your VPC.
     */
    subnets: Subnets;
    /**
     * A list of one or more security groups IDs in your VPC.
     */
    securityGroups?: SecurityGroups;
    /**
     * A boolean indicating whether to assign a public IP address.
     */
    assignPublicIp?: Boolean;
  }
  export interface VPCConfigResponse {
    /**
     * A list of subnet IDs associated with the simulation job.
     */
    subnets?: Subnets;
    /**
     * A list of security group IDs associated with the simulation job.
     */
    securityGroups?: SecurityGroups;
    /**
     * The VPC ID associated with your simulation job.
     */
    vpcId?: GenericString;
    /**
     * A boolean indicating if a public IP was assigned.
     */
    assignPublicIp?: Boolean;
  }
  export type Version = string;
  export type VersionQualifier = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-06-29"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the RoboMaker client.
   */
  export import Types = RoboMaker;
}
export = RoboMaker;