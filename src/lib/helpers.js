
export const populateTask = (task) => {
  if (task.entity_type_name === 'Shot') {
    if (task.episode_name) {
      task.full_entity_name = `${task.episode_name} / ${task.sequence_name} / ${task.entity_name}`
    } else {
      task.full_entity_name = `${task.sequence_name} / ${task.entity_name}`
    }
    task.entity_path = {
      name: 'shot',
      params: {
        production_id: task.project_id,
        shot_id: task.entity_id
      }
    }
  } else {
    task.full_entity_name = `${task.entity_type_name} / ${task.entity_name}`
    task.entity_path = {
      name: 'asset',
      params: {
        production_id: task.project_id,
        asset_id: task.entity_id
      }
    }
  }
}
