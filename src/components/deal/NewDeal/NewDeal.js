import {useEffect, useState} from "react";
import {postDeal} from "../../../services/DealService";
import {initialStateDeal} from "../../../services/InitialState";
import { Multiselect } from 'multiselect-react-dropdown';
import {getGroups} from "../../../services/GroupsService";

export function NewDeal() {

    const [form, setForm] = useState(initialStateDeal);
    const [groups, setGroups] = useState([]);

    useEffect(()=> {
        getGroups().then(g => {
            setGroups(g);
        });
    }, []);
    function onSelect(selectedList, selectedItem) {
        setForm({...form, groups: selectedList });
        console.log(form)
    }

    function onRemove(selectedList, removedItem) {
        setForm({...form, groups: selectedList });
    }

    const handlerChange = (e) => {
        let {name, value} = e.target;
        setForm( {...form, [name]: value});
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        postDeal(form).then(r => {
            if (r) {
                setForm(initialStateDeal);
            }
        });
    };

    return <div className="leading-loose justify-center flex">
        <form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl" onSubmit={handleOnSubmit}>
            <p className="text-gray-800 font-medium">Ajouter un deal</p>
            <div className="mt-2">
                <label className="block text-sm text-gray-00" htmlFor="title">Titre</label>
                <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" value={form.title} onChange={handlerChange} id="title" name="title" type="text" placeholder="Le titre" required />
            </div>
            <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="image">Image</label>
                <input className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="image" name="image" value={form.image} onChange={handlerChange} placeholder="Url de l'image" type="text" required />
            </div>
            <div className="mt-2 inline-block w-1/2 pr-1">
                <label className=" text-sm text-gray-600" htmlFor="price">Prix</label>
                <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="price" type="number" name="price" min="0" value={form.price} onChange={handlerChange} placeholder="Prix" />
            </div>
            {form.code === '' &&
                <div className="mt-2 inline-block w-1/2 pl-1 -mx-1">
                    <label className="inline-block text-sm block text-gray-600" htmlFor="startingPrice">Prix de départ</label>
                    <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" min="0" value={form.startingPrice} onChange={handlerChange} id="startingPrice" name="startingPrice" type="number" placeholder="Prix de départ" />
                </div>
            }
            <div className={"mt-2 " + (form.code !== '' && "inline-block w-1/2 pl-1 -mx-1 ")}>
                <label className="inline-block text-sm block text-gray-600" htmlFor="startingPrice">Code promo</label>
                <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" name="code" value={form.code} onChange={handlerChange} id="code" name="code" placeholder="Si code promo" />

            </div>

            <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="link">Lien du deal</label>
                <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="link" type="text" name="link" value={form.link} onChange={handlerChange} placeholder="Lien vers le site du deal" required />
            </div>
            <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="location">Localisation</label>
                <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="location" type="text" name="location" value={form.location} onChange={handlerChange} placeholder="Natianal, Paris..." />
            </div>
            <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="description">Déscription</label>
                <textarea
                    className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                    name="description"
                    onChange={handlerChange}
                    placeholder='Ecrivez quelque ligne pour la déscription'
                    value={form.description}
                    required
                />
            </div>

            <p className="mt-4 text-gray-800 font-medium">Groupes, Tags</p>
            <Multiselect
                options={groups} // Options to display in the dropdown
                selectedValues={[]} // Preselected value to persist in dropdown
                onSelect={onSelect} // Function will trigger on select event
                onRemove={onRemove} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
                name="groups[]"
            />
            <div className="mt-4 flex justify-end">
                <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Enregistret le deal</button>
            </div>
        </form>
    </div>;
}
