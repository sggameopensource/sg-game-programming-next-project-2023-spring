export default function OnChange() {
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    e.preventDefault();
    console.log('onChangeValue', e.target.value);
  };

  const onChangeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    console.log('onChangeChecked', e.target.checked);
  };

  const onChangeFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    console.log('onChangeFiles', e.target.files);
  };


  return (
    <div>
      <p>OnChange</p>
      <input type="text" onChange={onChangeValue} placeholder="type some text" defaultValue="Hello"/>
      <input type="checkbox" onChange={onChangeChecked} defaultChecked/>
      <input type="file" onChange={onChangeFiles} multiple accept="images/*" />
    </div>
  )
}