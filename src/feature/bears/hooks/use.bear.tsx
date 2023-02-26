import { useDispatch, useSelector } from "react-redux";
import { BearApiRepo } from "../components/repository/bear.api.repo";
import { BearStructure, ProtoBearStructure } from "../models/bear";
import { AppDispatch, RootState } from "../../../core/components/store/store";
import { useEffect } from "react";
import * as ac from "../reducer/bear.actions.creater";

export function useBear(repo: BearApiRepo) {
  const bears = useSelector((state: RootState) => state.bears);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const loadBears = async () => {
      try {
        const data = await repo.load();
        dispatch(ac.loadCreator(data));
      } catch (error) {
        console.log((error as Error).message);
      }
    };
    loadBears();
  }, [dispatch, repo]);

  const loadById = async (id: number) => {
    try {
      const data = await repo.loadId(id);
      dispatch(ac.loadIdCreator(data));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const addBear = async (bear: ProtoBearStructure) => {
    try {
      const finalJoke = await repo.add(bear);
      dispatch(ac.addCreator(finalJoke));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const updateBear = async (bear: Partial<BearStructure>) => {
    try {
      const finalJoke = await repo.update(bear);
      dispatch(ac.updateCreator(finalJoke));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const deleteBear = async (id: BearStructure["id"]) => {
    try {
      repo.delete(id);
      dispatch(ac.deleteCreator(id));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return {
    bears,
    loadById,
    addBear,
    updateBear,
    deleteBear,
  };
}
