export default function WorkspaceList({ workspaces }) {
    return (
      <ul>
        {workspaces.map((workspace) => (
          <li key={workspace.id}>{workspace.name}</li>
        ))}
      </ul>
    );
  }
  