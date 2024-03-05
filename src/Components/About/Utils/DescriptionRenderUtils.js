export const renderDescription = (descriptionsData, section, id) => {
  const filteredDescription = descriptionsData.find(item => item.section === section && item.id === id);
  if (filteredDescription) {
    return <p key={filteredDescription.id} id={`${section}-description-${filteredDescription.id}`}>{filteredDescription.description}</p>;
  }
  return null;
};

export const renderTimeline = (descriptionsData, section, id) => {
  const filteredTimeline = descriptionsData.find(item => item.section === section && item.id === id);
  if (filteredTimeline) {
    return <p key={filteredTimeline.id} id={`${section}-description-${filteredTimeline.id}`}>{filteredTimeline.description}</p>;
  }
  return null;
};
