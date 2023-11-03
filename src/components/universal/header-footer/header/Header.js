import React from 'react';
import MainSearchForm from "./main-search-form/MainSearchForm";
import SelectPartial from "./select-partial/SelectPartial";
import ToggleEditMode from "./toggle-admin/ToggleEditMode";
import Translation from "./translation/Translation";
import SelectSearchFilter from "./select-search-filter/SelectSearchFilter";
import styles from './Header.module.css'

const Header = () => {
	
	return (
		<div className={styles.hheader}>
			<div className="row">
				<div className="col-12 col-sm-12 col-md-4 col-lg-1">
					<div></div>
					<h2>Viz Artist Guide</h2>
				</div>
				<div className="col-12 col-sm-12 col-md-9 col-lg-6">
					<div className={styles.indent}>
						<table>
							<tbody>
								<tr>
									<td>
										<MainSearchForm />
									</td>
									<td >
										<div className={styles.indentsearchfilter}>
											<SelectSearchFilter />
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="col-4 col-sm-4 col-md-4 col-lg-2">
					<div className={styles.indent}>
						<SelectPartial />
					</div>
				</div>
				<div className="col-4 col-sm-4 col-md-4 col-lg-2">
					<div className={styles.indent}>
						<Translation />
					</div>
				</div>
				<div className="col-3 col-sm-4 col-md-4 col-lg-1">
					<div className={styles.indent}>
						<ToggleEditMode />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header;
